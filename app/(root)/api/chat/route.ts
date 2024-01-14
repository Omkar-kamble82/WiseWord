import { blogIdx } from "@/lib/db/pinecone";
import prisma from "@/lib/db/prisma";
import openai, { getEmbedding } from "@/lib/openai";

import { auth } from "@clerk/nextjs";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const messages: ChatCompletionMessage[] = body.messages;

        const messagesTruncated = messages.slice(-6);

        const embedding = await getEmbedding(
        messagesTruncated.map((message) => message.content).join("\n"),
        );

        const { userId } = auth();

        const vectorQueryResponse = await blogIdx.query({
        vector: embedding,
        topK: 4,
        filter: { userId },
        });

        const relevantBlogs = await prisma.blog.findMany({
        where: {
            id: {
            in: vectorQueryResponse.matches.map((match) => match.id),
            },
        },
        });

        console.log("Relevant notes found: ", relevantBlogs);

        const systemMessage: ChatCompletionMessage = {
        /* @ts-ignore */
        role: "system",
        content:
            "You are an intelligent blog app. You answer the user's question based on their existing blogs. " +
            "The relevant blogs for this query are:\n" +
            relevantBlogs
            .map((blog) => `Title: ${blog.title}\n\nContent:\n${blog.content}\n\category:\n${blog.category}`)
            .join("\n\n"),
        };

        const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        stream: true,
        messages: [systemMessage, ...messagesTruncated],
        });

        const stream = OpenAIStream(response);
        return new StreamingTextResponse(stream);
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}