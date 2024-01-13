"use client"

import { useClerk } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useUser } from "@clerk/clerk-react"

type Props = {}

const Menu = (props: Props) => {

    const { signOut } = useClerk();
    const router = useRouter()
    const { user } = useUser();
    const name = String(user?.fullName)

    const logout = async () => {
        await signOut()
        router.push("/")
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/9 h-10 sm:h-12 px-4 py-2">Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
                <Link href="/blog/create"><DropdownMenuLabel>Create Blog</DropdownMenuLabel></Link>
                <DropdownMenuSeparator />
                <Link href={`/blogs/${name.split(` `).join(`-`)}`}><DropdownMenuItem>My Blogs</DropdownMenuItem></Link>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Menu