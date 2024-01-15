import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Message } from "ai";
import { useChat } from "ai/react";
import { Bot, Trash, XCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface AIChatBoxProps {
    open: boolean;
    onClose: () => void;
}

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
    const {
        messages,
        input,
        handleInputChange,
        handleSubmit,
        setMessages,
        isLoading,
        error,
    } = useChat();

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

    return (
        <div
        className={cn(
            "bottom-0 right-0 z-[12] w-full max-w-[500px] p-1 xl:right-3",
            open ? "fixed" : "hidden",
        )}
        >
        <div className="flex h-[500px] flex-col rounded border bg-background shadow-xl">
        <button onClick={onClose} className="m-2 ms-auto block">
            <XCircle size={30} />
        </button>
            <div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
            {messages.map((message) => (
                <ChatMessage message={message} key={message.id} />
            ))}
            {isLoading && lastMessageIsUser && (
                <ChatMessage
                message={{
                    role: "assistant",
                    content: "Wiseword is thinking...",
                }}
                />
            )}
            {error && (
                <ChatMessage
                message={{
                    role: "assistant",
                    content: "Something went wrong. Please try again.",
                }}
                />
            )}
            {!error && messages.length === 0 && (
                <div className="flex h-full items-center justify-center gap-3">
                <Image src="/icon.png" alt="icon" height={30} width={30}/>
                Ask the AI a question about the blogs
                </div>
            )}
            </div>
            <form onSubmit={handleSubmit} className="m-3 flex gap-1">
            <Button
                title="Clear chat"
                variant="outline"
                size="icon"
                className="shrink-0"
                type="button"
                onClick={() => setMessages([])}
            >
                <Trash className="text-rose-500" />
            </Button>
            <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Say something..."
            />
            <Button className="ml-1" type="submit">Ask</Button>
            </form>
        </div>
        </div>
    );
    }

    function ChatMessage({
    message: { role, content },
    }: {
    message: Pick<Message, "role" | "content">;
    }) {
    const { user } = useUser();

    const isAiMessage = role === "assistant";

    return (
        <div
        className={cn(
            "mb-3 flex items-center",
            isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
        )}
        >
        {isAiMessage && <Bot className="mr-2 shrink-0" />}
        <p
            className={cn(
            "whitespace-pre-line rounded-md border px-3 py-2",
            isAiMessage ? "bg-background" : "bg-primary text-primary-foreground",
            )}
        >
            {content}
        </p>
        {!isAiMessage && user?.imageUrl && (
            <Image
            src={user.imageUrl}
            alt="User image"
            width={100}
            height={100}
            className="ml-2 h-10 w-10 rounded-full object-cover"
            />
        )}
        </div>
    );
}