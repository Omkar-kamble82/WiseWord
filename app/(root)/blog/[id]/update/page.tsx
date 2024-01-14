import BlogForm from "@/components/custom/BlogForm"
import prisma from "@/lib/db/prisma";
import { blog } from "@/lib/types";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Update Blog | WiseWord' ,
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
        <div className="w-full py-5 max-w-7xl mx-auto">
            <h1 className="font-bold text-[45px] sm:text-[55px] text-center">Update Blog</h1>
            <BlogForm type={"Update"} blog={blog}/>
        </div>
    )
}

