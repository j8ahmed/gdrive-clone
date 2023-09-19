import { FileModalProps } from "@/Interface/";
import styles from "./style.module.scss";

export default function FileModal({setShowModal, email, setEmail, file, shareFile}: FileModalProps) {
    const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        shareFile()
        setShowModal(false)
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalBox}>
                <button className="btn btn-sm btn-circle btn-ghost right-2 top-2" onClick={() => setShowModal(false)}>✕</button>

                <form onSubmit={handleSubmission}>
                    <label htmlFor="email">Share {file.isFolder ? "folder" : "file"} ("<span>{file.name}</span>") with another Gmail Account</label>

                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email" 
                        className="input input-bordered w-full max-w-xs" 
                        value={email} onChange={(e) => setEmail(e.target.value)} 
                        required
                    /> 

                    <button type="submit" className={`btn btn-outline mr-2 btn-accent ${styles.shareBtn}`}>Share</button>
                </form>
            </div>
        </div>
    )
}
