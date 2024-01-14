"use client"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "../ui/button"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { Trash } from 'lucide-react';

type Props = {
    id: string
}

const Deletebutton = (props: Props) => {
    const { toast } = useToast()
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()

    const deleteblog = async () => {
        try {
            setSubmitting(true)
            const response = await fetch("/api/blogs", {
                method: "DELETE",
                body: JSON.stringify({
                    id: props.id,
                })
            })
            if(!response.ok) throw Error("Something went wrong, Status code: " + response.status);
            toast({
                description: "Blog Deleted successfully 🫡🫡",
            })
            router.push('/')
            router.refresh()
        } catch(err) {
            console.error(err);
            toast({
                description: "Something went wrong 😨😨",
            })
        } finally {
            setSubmitting(false);
        }
    }
    return (
        <div>
            <Button variant={"destructive"} onClick={deleteblog} disabled={submitting}><Trash size={14} className="mr-[5px]"/>Delete Blog</Button>
        </div>
    )
}

export default Deletebutton