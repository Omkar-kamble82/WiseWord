import { UserButton } from "@clerk/nextjs";
import prisma from "@/lib/db/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {};

export default async function page() {
    const blogs = await prisma.blog.findMany()
    return (
        <div>
            {blogs.map((blog) => (
                <div key={blog.id}><a href={`/blog/${blog.id}`}><p>{blog.title}</p></a></div>
            ))}
            <UserButton afterSignOutUrl="/" />
            <Link href="/blog/create"><Button>create</Button></Link>
        </div>
    );
};
