import prisma from "@/lib/db/prisma";
import { blog } from "@/lib/types";
import Markdown from "@/components/custom/Markdown";
import { Button } from "@/components/ui/button";
import Controlbtn from "@/components/custom/Controlbtn"

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog | WiseWord' ,
    description: 'WiseWord redefines the blogging landscape by introducing an intuitive blog app accompanied by an AI chat bot. Utilizing vector embedding technology, our platform transforms your reading experience into a dynamic and insightful journey.',
}

type UpdateEventProps = {
    params: {
        id: string
    }
}

export default async function Updateblog({ params: { id } }: UpdateEventProps) {
    const blog = await prisma.blog.findUnique({
        where: {
            id: id
        }
    }) as blog
    return (
        <div className="mb-[20px]">
            <div className="w-[100vw] mb-[15px] h-[60vh] object-cover relative">
                <Image src={blog.blogImage} alt={blog.title} width={2000} height={2000} className="w-[100vw] h-[60vh] object-cover"/>
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="mx-2">
                <h1 className="text-[30px] sm:text-[45px] xl:text-[50px] font-bold">{blog.title}</h1>
                <div className="flex my-[8px] sm:items-center sm:justify-between flex-col sm:flex-row">
                    <Link href={`/category/${blog.category}`}><Button className="w-[80px] mb-[10px] sm:mb-[0px]">{blog.category}</Button></Link>
                    <Controlbtn id={id} username={blog.username} />
                </div>
                <div className="text-[14px] mt-[20px] sm:text-[20px]">
                    <Markdown>{blog.content}</Markdown>
                </div>
            </div>
        </div>
    )
}
