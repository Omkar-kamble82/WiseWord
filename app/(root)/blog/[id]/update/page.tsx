import BlogForm from "@/components/custom/BlogForm"
import prisma from "@/lib/db/prisma";
import { blog } from "@/lib/types";

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
        <div className="w-full py-4 max-w-7xl mx-auto">
            <h1 className="font-bold text-4xl text-center">Update Blog</h1>
            <BlogForm type={"Update"} blog={blog}/>
        </div>
    )
}

