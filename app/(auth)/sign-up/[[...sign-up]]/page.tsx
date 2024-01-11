import { SignUp } from "@clerk/nextjs";
import type { Metadata } from 'next'

import AuthNavbar from "@/components/custom/AuthNavbar";

export const metadata: Metadata = {
    title: 'Sign Up | WiseWord' ,
    description: 'WiseWord redefines the blogging landscape by introducing an intuitive blog app accompanied by an AI chat bot. Utilizing vector embedding technology, our platform transforms your reading experience into a dynamic and insightful journey.',
}

export default function Page() {
    return (
        <>
            <AuthNavbar />
            <div className="h-[96vh] flex justify-center items-center">
                <SignUp />
            </div>
        </>
    );
}