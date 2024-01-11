import Image from "next/image";
import Link from "next/link";

type Props = {}

const AuthNavbar = (props: Props) => {
    return (
        <nav className="p-3 fixed w-full flex items-center justify-center bg-slate-50 shadow-2xl">
            <Link href={"/"}><Image src={"/Logo.png"} alt={"logo"} width={400} height={400} className="w-[170px] sm:w-[300px]"/></Link>
        </nav>
    )
}

export default AuthNavbar