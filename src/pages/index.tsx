import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import ViewFiles from "@/components/ViewFiles";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
    const { data: session } = useSession();
    return (
        <>
            <Head>
                <title>J Drive - Google Drive Clone</title>
                <meta name="description" content="Google Drive clone project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#111111] to-[#15162c]">
                <div className="container flex flex-col items-start justify-start gap-12 px-4 py-16 ">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] align-left">
                        Welcome <span className="text-[rgb(0,175,175)]">{session?.user.name}</span>
                    </h1>

                    <ViewFiles userEmail={session?.user?.email ?? ""}/>
                </div>
            </main>
        </>
   );
}
