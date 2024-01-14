import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/custom/Navbar'

type Props = {}

const Notfound = (props: Props) => {
    return (
        <>
            <Navbar />
            <div className="h-[78vh] gap-2 flex flex-col justify-center items-center">
                <Image width={500} height={500} alt="not-found" src={"/notfound.jpg"} className='h-[380px]'/>
                <h1 className="text-[40px] sm:text-[50px] font-bold">Page Not Found....</h1>
                <Link href="/home"><Button>Go to Home</Button></Link>
            </div>
        </>
    )
}

export default Notfound