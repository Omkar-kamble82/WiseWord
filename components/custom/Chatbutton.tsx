import { Bot, MessageSquareCode } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./Chatbot";
import { Button } from "../ui/button";

export default function AIChatButton() {
    const [chatBoxOpen, setChatBoxOpen] = useState(false);

    return (
        <>
        <p className="bg-black text-white p-4 rounded-full flex flex-col items-center text-[10px] sm:text-sm font-semibold" onClick={() => setChatBoxOpen(true)}>
            <MessageSquareCode size={20} className="" />
            ChatBot
        </p>
        <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
        </>
    );
}