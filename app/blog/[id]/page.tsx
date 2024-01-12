import prisma from "@/lib/db/prisma";
import { blog } from "@/lib/types";
import Image from "next/image";
import Deletebutton from "@/components/custom/Deletebutton"
import Markdown from "@/components/custom/Markdown";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <div>
            <h1>{id}</h1>
            <h1>{blog.title}</h1>
            <h1>{blog.category}</h1>
            <Markdown>{blog.content}</Markdown>
            <Image src={blog.blogImage} alt={"alt"} width={100} height={100}/>
            <div className="flex items-center gap-4">
                <Deletebutton id={id} />
                <Link href={`/blog/${id}/update`}><Button>Update Blog</Button></Link>
            </div>
        </div>
    )
}
