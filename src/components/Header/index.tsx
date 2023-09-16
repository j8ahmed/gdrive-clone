import { useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { fileUpload } from "~/api/firestore/fileUpload"
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import styles from "./style.module.scss";

export default function Header() {
    const { data: session } = useSession();
    const [showUploadFileInput, setShowUploadFileInput] = useState(false);
    const [progress, setProgress] = useState(0);

    return (
        <header className={styles.header}>
            <div id={styles.topbar}>
                {session ? 
                    <div id={styles.uploadBtnsContainer}>
                        <Button btnClass="btn-outline mr-2" onClick={() => setShowUploadFileInput(val => !val) } title="Add File" />
                        {showUploadFileInput ? 
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={(event) => fileUpload(event, setProgress)} /> : null
                        }
                        <Button btnClass="btn-outline ml-2" onClick={null} title="Add Folder" />
                    </div> : ""
                }

                <div id={styles.signoutContainer}>
                    {session ? 
                        <>
                            <Button btnClass="btn-primary btn-sm" onClick={signOut} title="Sign Out!" />
                            <img className={styles.profileImg} src={session.user.image as string} alt={session.user.name ?? ""} />
                        </> :
                        <Button btnClass="btn-primary btn-sm" onClick={signIn} title="Sign Up!" /> 
                    }
                </div>
            </div>

            {progress > 0 && progress < 100 ? <ProgressBar value={progress} /> : ""}
        </header>
    );
}

