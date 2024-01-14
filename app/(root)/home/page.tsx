import Username from "@/components/custom/Username";
import Recentlyadded from "@/components/custom/Recentlyadded";
import { Separator } from "@/components/ui/separator"
import AllBlog from "@/components/custom/AllBlog";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home | WiseWord' ,
    description: 'WiseWord redefines the blogging landscape by introducing an intuitive blog app accompanied by an AI chat bot. Utilizing vector embedding technology, our platform transforms your reading experience into a dynamic and insightful journey.',
}

type Props = {};

export default async function page() {

    return (
        <div className="mt-[20px]">
            <span className="font-bold text-[30px] sm:text-[40px] text-slate-700 text-left ml-[8px] sm:ml-[20px] flex items-center gap-2"><p>Hello,</p><Username/></span>
            <Recentlyadded />
            <Separator />
            <AllBlog />
        </div>
    );
};
