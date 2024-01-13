import { UserButton } from "@clerk/nextjs";
import prisma from "@/lib/db/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Username from "@/components/custom/Username";

type Props = {};

export default async function page() {
    const blogs = await prisma.blog.findMany()
    return (
        <div className="mt-[20px]">
            <span className="font-bold text-[30px] sm:text-[40px] text-slate-700 text-left ml-[8px] sm:ml-[20px] flex items-center gap-2"><p>Hello,</p><Username /></span>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <a href={`/blog/${blog.id}`}><p>{blog.title}</p></a>
                    <Image src={blog.blogImage} alt={blog.title} height={40} width={40}/>
                </div>
            ))}
        </div>
    );
};
