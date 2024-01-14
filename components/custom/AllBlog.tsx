import Image from "next/image"
import Link from "next/link"

import { Button } from "../ui/button"
import Markdown from "./Markdown"
import prisma from "@/lib/db/prisma"

type Props = {}

export default async function AllBlog(props: Props) {
    let blogs = await prisma.blog.findMany()
    blogs = blogs.reverse()
    return (
        <div className="max-w-[1400px] mb-[20px] mx-auto">
            <h1 className="text-[25px] font-bold sm:text-[35px] md:text-[40px] text-center my-[15px]">All Blogs</h1>
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
        </div>
    )
}

