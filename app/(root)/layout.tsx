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
            <span className="fixed bottom-6 right-6 "><Aibutton/></span>
        </div>
    )
}
