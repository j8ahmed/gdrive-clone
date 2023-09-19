import { useState } from "react";
import { useRouter } from "next/router";
import { FileProps } from "@/Interface/";
import { updateFileField } from "~/api/firestore/firestore";
import FileModal from "@/components/FileModal/";
import styles from "./style.module.scss";

export default function File({open, file}: FileProps) {
    const [showModal, setShowModal] = useState(false);
    const [shareWithEmail, setShareWithEmail] = useState("");
    const {id, name, fileLink, isImage, isFolder} = file

    const share = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        updateFileField(id, "sharedWith", {sharedWith: [shareWithEmail, ...file.sharedWith]});
    };

    return (
        <div className={styles.file}>
            <a className={styles.fileLink} onClick={(e) => open(e, file)}>
                {isImage ? 
                    <img className={styles.img} src={fileLink} alt={name} title={name} /> : isFolder ? 
                    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" >
                        <title>{name}</title>
                        <path d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z" />
                    </svg> : 
                    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" >
                        <title>{name}</title>
                        <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
                    </svg>
                }
            </a>

            <h4 className={styles.fileHeading}>
                {name.length > 15 ? name.substring(0, 15) + "..." : name}
            </h4>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {!isFolder ? 
                <button className={`btn ${styles.openModalButton}`} onClick={() => setShowModal(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                    </svg>
                </button> :
                null
            }

            {showModal ?
                <FileModal 
                    setShowModal={setShowModal}
                    email={shareWithEmail}
                    setEmail={setShareWithEmail}
                    shareFile={share}
                    file={file}
                /> :
                null
            }
        </div>
    )
}
