"use client"
import { useClerk } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'

type Props = {}

const Logout = (props: Props) => {

    const { signOut } = useClerk();
    const router = useRouter()

    const logout = () => {
        signOut()
        router.push("/")
    }
    return (
        <button onClick={logout}>Logout</button>
    )
}

export default Logout