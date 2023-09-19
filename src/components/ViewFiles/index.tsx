import { useState } from "react";
import { useRouter } from "next/router";
import useFiles from "@/hooks/useFiles";
import File from "@/components/File/";
import { File as FileType, ViewFilesProps } from "@/Interface/";
import styles from "./style.module.scss";

export default function ViewFiles({parentFolderId = "", userEmail = ""}: ViewFilesProps) {
    const router = useRouter();
    const fileList = useFiles(parentFolderId, userEmail);

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, file: FileType) => {
        event.preventDefault();
        const { id, name, isFolder, fileLink } = file;
        if (isFolder) {
            router.push(`/folder/${fileLink}?parentFolderId=${id}&name=${name}`);
        } else {
            window.open(fileLink);
        }
    };

    return (
        <div id={styles.container}>
            <ul id={styles.fileList}>
                {fileList.map( (file) => 
                    (<li key={file.id}>
                        <File open={handleLinkClick} file={file} />
                    </li>)
                )}
            </ul>
        </div>
    )
}
