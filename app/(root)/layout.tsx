import Navbar from "@/components/custom/Navbar"
import Aibutton from "@/components/custom/Aibutton"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="">
            <Navbar />
            <main>{children}</main>
        </div>
    )
}
