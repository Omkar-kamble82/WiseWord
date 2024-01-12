"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { blogFormSchema } from "@/lib/validator"
import Dropdown from "./Dropdown"
import { FileUploader } from "./Fileuploader"
import { draftToMarkdown } from "markdown-draft-js";
import RichTextEditor from "./RichTextEditor";
import { useUploadThing } from '@/lib/uploadthing'
import { useUser } from "@clerk/clerk-react"
import { useToast } from "@/components/ui/use-toast"
import { blog } from "@/lib/types"
import { markdownToDraft } from 'markdown-draft-js';
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react';

type Props = {
    type: "Create" | "Update"
    blog?: blog
}

const BlogForm = (props: Props) => {
    const [files, setFiles] = useState<File[]>([])
    const [imagetype, setImageType] = useState(0)
    const [submitting, setSubmitting] = useState(false)
    const { startUpload } = useUploadThing('imageUploader')
    const { user } = useUser();
    const { toast } = useToast()
    const router = useRouter()

    const form = useForm<z.infer<typeof blogFormSchema>>({
        resolver: zodResolver(blogFormSchema),
        defaultValues: {
            title: props.type === "Update" ? props.blog?.title : "",
            category: props.type === "Update" ? props.blog?.category : "",
            content: props.type === "Update" ? props.blog?.content : "",
            blogImage: props.type === "Update" ? props.blog?.blogImage : "",
        },
    })

    async function onSubmit(values: z.infer<typeof blogFormSchema>) {
        try {
            setSubmitting(true)
            let uploadedImageUrl = values.blogImage;
            if(files.length > 0) {
                const uploadedImages = await startUpload(files)
                if(!uploadedImages) {
                    return
                }
                uploadedImageUrl = uploadedImages[0].url
            }
            if(props.type === "Create") {
                const input = { title: values.title, category: values.category, content: values.content, username: user?.fullName, blogImage: uploadedImageUrl, profileImage: user?.imageUrl }
                const response = await fetch("/api/blogs", {
                    method: "POST",
                    body: JSON.stringify(input),
                });
                if(!response.ok) throw Error("Something went wrong, Status code: " + response.status);
                form.reset();
                toast({
                    description: "Blog Added successfully 🫡🫡",
                })
            } else {
                const input = { title: values.title, category: values.category, content: values.content, blogImage: uploadedImageUrl }
                const response = await fetch("/api/blogs", {
                    method: "PUT",
                    body: JSON.stringify({
                        id: props.blog?.id,
                        input: input
                    })
                })
                if(!response.ok) throw Error("Something went wrong, Status code: " + response.status);
                form.reset();
                toast({
                    description: "Blog Updated successfully 🫡🫡",
                })
            }
            router.push('/home')
        } catch (err) {
            console.error(err);
            toast({
                description: "Something went wrong 😨😨",
            })
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="p-3 rounded-2xl mx-1 my-[20px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-[30px] sm:text-[35px] font-bold text-slate-700">Title </FormLabel>
                            <FormControl>
                                <Input className="h-[50px]" placeholder="e.g: The Mystery of Dark Matter" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className="text-[30px] sm:text-[35px] font-bold text-slate-700">Choose the Category </FormLabel>
                            <FormControl>
                                <Dropdown onChangeHandler={field.onChange} value={field.value} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-[30px] sm:text-[35px] font-bold text-slate-700">Content </FormLabel>
                            <FormControl>
                            <RichTextEditor
                                onChange={(draft) =>
                                    field.onChange(draftToMarkdown(draft))
                                } 
                                defaultContentState = {markdownToDraft(props.blog?.content as string)}
                                ref={field.ref}
                            />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="blogImage"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel className="text-[30px] sm:text-[35px] font-bold text-slate-700">Image </FormLabel>
                                <FormControl>
                                    <div>
                                        <span className="flex items-center gap-2 mb-4">
                                            <Button>Uplaod a image</Button>
                                            <Button>Choose from gallery</Button>
                                        </span>
                                        <FileUploader 
                                            onFieldChange={field.onChange}
                                            imageUrl={field.value}
                                            setFiles={setFiles}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full z-[1]" type="submit" disabled={submitting}>{props.type} blog</Button>
                </form>
            </Form>
        </div>
    )
}

export default BlogForm