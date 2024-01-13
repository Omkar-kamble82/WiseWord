import prisma from "@/lib/db/prisma";
import Image from "next/image";

type Props = {
    params: {
        username: string
    }
}

export default async function page({ params: { username } }: Props){
    const name = username.split("-").join(" ")

    const blogs = await prisma.blog.findMany({
        where: {
            username: name
        }
    })
    return (
        <div className="mt-[30px]">
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <a href={`/blog/${blog.id}`}><p>{blog.title}</p></a>
                    <Image src={blog.blogImage} alt={blog.title} height={40} width={40}/>
                </div>
            ))}
        </div>
    )
}
