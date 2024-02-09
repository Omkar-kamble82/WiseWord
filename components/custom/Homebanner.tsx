import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

type Props = {}

const Homebanner = (props: Props) => {
    return (
        <div className="min-h-[96vh] bg-slate-50 flex justify-center items-center flex-col px-5">
            <Image height={500} width={600} className="object-contain sm:h-[420px]" src={"/home-banner.svg"} alt={"Home-banner"}/>
            <span className="text-center max-w-7xl mx-auto">
                <h1 className="text-[23px] sm:text-[40px] font-extrabold">WiseWord: Elevate Your Reading Experience with AI-Enhanced Blogs</h1>
                <p className="text-[12px] sm:text-[16px] text-muted-foreground">Embark on a cultural journey exploring timeless wisdom from different corners of the world. Uncover valuable insights, traditions, and philosophies that have stood the test of time, offering lessons for a more meaningful and interconnected existence.</p>
                <Link href={"/sign-up"}><Button className="my-[8px] sm:text-[16px] p-6 font-semibold" variant={"default"}> Get started with WiseWord</Button></Link>
                <p className="text-muted-foreground text-[15px]">*Already a member?  <Link href={"/sign-in"}><span className="underline cursor-pointer">SignIn</span></Link></p>
            </span>
        </div>
    )
}

export default Homebanner
