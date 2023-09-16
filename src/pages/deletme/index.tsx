import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
    const { data: session } = useSession();
    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Throw Away Test Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        Delete this page <span className="text-[hsl(280,100%,70%)]">{session?.user.name}</span>
                    </h1>
                </div>
            </main>
        </>
   );
}
