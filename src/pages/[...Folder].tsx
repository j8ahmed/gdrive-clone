import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import ViewFiles from "@/components/ViewFiles";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";

export default function Folder() {
    const { data: session } = useSession();
    const router = useRouter();
    const parentFolderId = router?.query?.parentFolderId ?? "";
    const folderName = router?.query?.name ?? "";

    return (
        <>
            <Head>
                <title>Folder: {folderName} - J Drive - Google Drive Clone</title>
                <title></title>
                <meta name="description" content="Google Drive clone project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header parentFolderId={parentFolderId}/>

            <main className="flex min-h-screen flex-col items-start justify-start px-4 pt-8 bg-gradient-to-b from-[#111111] to-[#15162c]">
                <h3 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                    Folder: <span className="text-[rgb(0,175,175)]">{folderName ? folderName : "/"}</span>
                </h3>

                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <ViewFiles parentFolderId={parentFolderId} userEmail={session?.user?.email ?? ""} />
                </div>
            </main>
        </>
   );
}
