import { Bot, MessageSquareCode } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./Chatbot";
import { Button } from "../ui/button";

export default function AIChatButton() {
    const [chatBoxOpen, setChatBoxOpen] = useState(false);

    return (
        <>
        <p className="bg-black text-white p-2 cursor-pointer rounded-full flex flex-col items-center text-[10px] sm:text-[12px] font-semibold" onClick={() => setChatBoxOpen(true)}>
            <MessageSquareCode size={18} className="" />
            ChatBot
        </p>
        <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
        </>
    );
}