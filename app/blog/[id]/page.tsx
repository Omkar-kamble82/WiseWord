import prisma from "@/lib/db/prisma";
import { blog } from "@/lib/types";
import Image from "next/image";
import Deletebutton from "@/components/custom/Deletebutton"

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
            <h1>{blog.content}</h1>
            <Image src={blog.blogImage} alt={"alt"} width={100} height={100}/>
            <Deletebutton id={id} />
        </div>
    )
}
