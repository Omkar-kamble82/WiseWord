import prisma from "@/lib/db/prisma"
import Image from "next/image"
import Markdown from "./Markdown";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Link from "next/link";

type Props = {}

export default async function Recentlyadded(props: Props) {
    let blogs = await prisma.blog.findMany()
    blogs = (blogs.reverse()).slice(0, 5)

    return (
        <div className="mx-1 sm:mx-4 my-4 overflow-x-hidden">
            <Carousel className="cardiv w-[85vw] sm:max-w-[90vw] mx-auto">
            <CarouselContent>
                {blogs.map((blog) => (
                    <CarouselItem key={blog.id}>
                        <div className="p-3 shadow-lg rounded-xl border-2 border-slate-300 min-h-[540px] sm:min-h-[400px] flex justify-center items-center flex-col gap-4 sm:flex-row">
                            <Image className="rounded-xl w-[350px] object-cover sm:h-[400px] xl:w-[500px]" src={blog.blogImage} alt={blog.title} width={500} height={500}/>
                            <div>
                                <h1 className="text-[20px] mb-[10px] sm:text-[30px] xl:text-[40px] font-bold text-[#2e2e2e] select-none">{blog.title}</h1>
                                <span className="hidden sm:block text-[10px] sm:text-[12px] xl:text-[18px] select-none"><Markdown>{blog.content.substring(0, 350)+"..."}</Markdown></span>
                                <span className="block sm:hidden text-[10px] sm:text-[12px] xl:text-[18px] select-none"><Markdown>{blog.content.substring(0, 200)+"..."}</Markdown></span>
                                <Link href={`/blogs/${blog.username.split(` `).join(`-`)}`}>
                                    <div className="flex cursor-pointer items-center gap-2 py-2">
                                        <span className="text-[#2d2d2d] text-[18px] rounded-full font-bold"><Image className="h-[40px] rounded-full" width={40} height={30} src={blog.profileImage} alt="user_img"/></span>
                                        <p className="text-[#2d2d2d] font-semibold">{blog.username}</p>
                                    </div>
                                </Link>
                                <Link href={`/blog/${blog.id}`}><Button className="px-3 text-sm font-semibold bg-[#2d2d2d] border-[#2d2d2d] text-[white] py-1 border-2 rounded-md hover:opacity-90 duration-500 transition-all">Read Blog</Button></Link>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
    )
}
