import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Logout from "./Logout";
import Menu from "./Menu";

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className="py-3 px-3 sm:px-8 w-[100vw] flex items-center justify-between bg-slate-50 shadow-2xl">
            <Link href={"/home"}><Image src={"/Logo.png"} alt={"logo"} width={400} height={400} className="w-[170px] sm:w-[300px]"/></Link>
            <Menu />
        </nav>
    )
}

export default Navbar