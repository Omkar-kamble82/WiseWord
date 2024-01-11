import AuthNavbar from "@/components/custom/AuthNavbar";
import Footer from "@/components/custom/Footer";
import Homebanner from "@/components/custom/Homebanner";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {

  const { userId } = auth()
  if(userId) redirect("/home")

  return (
    <main className="bg-slate-50">
      <AuthNavbar />
      <Homebanner />
    </main>
  )
}
