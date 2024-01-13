"use client"
import { useUser } from "@clerk/nextjs";

type Props = {}

const Username = (props: Props) => {
    const { user } = useUser()
    return (
        <p>{user?.fullName}</p>
    )
}

export default Username