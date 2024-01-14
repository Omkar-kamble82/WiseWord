import prisma from "@/lib/db/prisma";
import { blogIdx } from "@/lib/db/pinecone";
import { getEmbedding } from "@/lib/openai"

import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
    try {
        const {userId} = auth()
        if(!userId) return Response.json({error: "Unauthenticated"}, {status: 401})
        const body = await req.json();
        const blog = await prisma.blog.create({
            data: body
        });
        const embedding = await getEmbeddingforblog(body.title, body.content, body.tag);
        await blogIdx.upsert([
            {
                id: blog.id,
                values: embedding,
                metadata: {userId}
            }
        ])
        return Response.json({ blog }, { status: 201 })
    } catch (err) {
        console.log("From server: ",err)
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { id, input } = body

        const blog = await prisma.blog.update({
            where: { id },
            data: input 
        });
        const embedding = await getEmbeddingforblog(input.title, input.content, input.tag);
        await blogIdx.upsert([
            {
                id,
                values: embedding,
            }
        ])
        return Response.json({ blog }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const { id } = body
        const blog = await prisma.blog.delete({
            where: { id }
        });

        await blogIdx.deleteOne(id)
    
        return Response.json({ message: "blog deleted" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}

async function getEmbeddingforblog(title: string, content: string, category: string) {
    return getEmbedding(title + "\n\n" + content + "\n\n" + category);
}