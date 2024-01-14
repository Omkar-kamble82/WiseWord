"use client"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "../ui/button"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { Trash } from 'lucide-react';
import Deletebutton from "./Deletebutton"
import Link from "next/link";
import { Pen } from 'lucide-react';
import { useUser } from "@clerk/nextjs"

type Props = {
    id: string
    username: string
}

const Controlbtn = (props: Props) => {
    const { user } = useUser();
    return (
        <>
            {user?.fullName === props.username && 
            <div className="flex items-center gap-2 mt-[5px]">
                <Deletebutton id={props.id} />
                <Link href={`/blog/${props.id}/update`}><Button className="bg-green-600"><Pen size={14} className="mr-[5px]"/>Update Blog</Button></Link>
            </div>}
        </>
    )
}

export default Controlbtn