import prisma from "@/lib/db/prisma";
import { Button } from "@/components/ui/button";
import Markdown from "@/components/custom/Markdown";

import Image from "next/image";
import type { Metadata } from 'next'
import Link from "next/link";

type Props = {
    params: {
        username: string
    }
}

export const metadata: Metadata = {
    title: 'Blogs | WiseWord' ,
    description: 'WiseWord redefines the blogging landscape by introducing an intuitive blog app accompanied by an AI chat bot. Utilizing vector embedding technology, our platform transforms your reading experience into a dynamic and insightful journey.',
}


export default async function page({ params: { username } }: Props){
    const name = username.split("-").join(" ")
    
    const blogs = await prisma.blog.findMany({
        where: {
            username: name
        }
    })
    let length = blogs.length
    return (
        <div className="max-w-[1400px] mb-[20px] mx-auto">
            {length > 0 ? (
            <>
                <h1 className="text-[25px] font-bold sm:text-[35px] md:text-[40px] text-center my-[15px]">{name+"'s"} Blogs</h1>
                <div className="flex items-center gap-4 justify-center flex-wrap mx-2">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="card md:w-[320px] sm:h-[640px] xl:w-[400px] xl:h-[580px] border-2 rounded-xl border-slate-400 p-3">
                            <Image src={blog.blogImage} alt={blog.title} className="w-full h-[250px] object-cover rounded-xl" width={500} height={500}/>
                            <h1 className="text-[22px] sm:text-[24px] mb-[10px] font-bold">{blog.title}</h1>
                            <div className="text-[12px] sm:text-[15px] mb-[8px]"><Markdown>{blog.content.substring(0, 200)+"..."}</Markdown></div>
                            <Link href={`/blogs/${blog.username.split(` `).join(`-`)}`}>
                                <div className="flex cursor-pointer items-center gap-2 py-2">
                                    <span className="text-[#2d2d2d] text-[18px] rounded-full font-bold"><Image className="h-[40px] rounded-full" width={40} height={30} src={blog.profileImage} alt="user_img"/></span>
                                    <p className="text-[#2d2d2d] font-semibold">{blog.username}</p>
                                </div>
                            </Link>
                            <Link href={`/blog/${blog.id}`}><Button className="px-3 text-sm font-semibold bg-[#2d2d2d] border-[#2d2d2d] text-[white] py-1 border-2 rounded-md hover:opacity-90 duration-500 transition-all">Read Blog</Button></Link>
                        </div>
                    ))}
                </div>
            </>
            ) : (
                <div className="h-[78vh] gap-2 flex flex-col justify-center items-center">
                    <h1 className="text-[40px] sm:text-[50px] font-bold">No Blog Found....</h1>
                    <Link href="/home"><Button>Go to Home</Button></Link>
                </div>
            )}
        </div>
    )
}
