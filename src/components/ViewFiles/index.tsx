import { useState } from "react"
import useFiles from "@/hooks/useFiles"
import styles from "./style.module.scss";

export default function ViewFiles() {
    const fileList = useFiles();
    console.log(fileList)

    return (
        <div id={styles.container}>
            <ul id={styles.fileList}>
                {fileList.map((file, i) => {
                    const {name, imageLink} = file;
                    return (
                        <a class={styles.fileLink} href={imageLink} rel="noreferrer noopener" target="_blank">
                            <li key={i} className={styles.file}>
                                <img className={styles.img} src={imageLink} alt={name} title={name} />
                                <h4 className={styles.fileHeading}>{name.length > 15 ? name.substring(0, 15) + "..." : name}</h4>
                            </li>
                        </a>
                    )
                })
            }
            </ul>
        </div>
    );
}

