import BlogForm from "@/components/custom/BlogForm"

const createBlog = () => {
    return (
        <div className="w-full py-4 max-w-7xl mx-auto">
            <h1 className="font-bold text-[50px] text-slate-700 text-center">Create Blog</h1>
            <BlogForm type={"Create"} />
        </div>
    )
}

export default createBlog