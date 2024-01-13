import BlogForm from "@/components/custom/BlogForm"

const createBlog = () => {
    return (
        <div className="w-full py-5 max-w-7xl mx-auto">
            <h1 className="font-bold text-[45px] sm:text-[55px] text-slate-700 text-center">Create Blog</h1>
            <BlogForm type={"Create"} />
        </div>
    )
}

export default createBlog