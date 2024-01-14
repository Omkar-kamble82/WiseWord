import BlogForm from "@/components/custom/BlogForm"

import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Create Blog | WiseWord' ,
    description: 'WiseWord redefines the blogging landscape by introducing an intuitive blog app accompanied by an AI chat bot. Utilizing vector embedding technology, our platform transforms your reading experience into a dynamic and insightful journey.',
}


const createBlog = () => {
    return (
        <div className="w-full py-5 max-w-7xl mx-auto">
            <h1 className="font-bold text-[45px] sm:text-[55px] text-slate-700 text-center">Create Blog</h1>
            <BlogForm type={"Create"} />
        </div>
    )
}

export default createBlog