import * as z from "zod"

export const blogFormSchema = z.object({
    title: z.string().min(4, 'Title must be at least 4 characters'),
    category: z.string().min(1, 'Category must be selected'),
    content: z.string().min(4, 'Content for the blog is required'),
    blogImage: z.string().url(),
})
