import { useState } from "react"
import useFiles from "@/hooks/useFiles"
import styles from "./style.module.scss";


export default function ViewFiles() {
    const fileList = useFiles();

    const fileIsImage = (filename: string) => {
        const imageFileTypes = ["png", "jpg", "jpeg", "gif", "svg"]

        const regex = new RegExp("\.\([a-z]+\)$", "i")
        const matches = filename.match(regex)
        if (matches){
            const fileType = matches[1]
            return imageFileTypes.includes(fileType)
        }
        return false
    }

    return (
        <div id={styles.container}>
            <ul id={styles.fileList}>
                {fileList.map((file, i) => {
                    const {name, imageLink} = file;
                    return (
                        <a key={i} className={styles.fileLink} href={imageLink} rel="noreferrer noopener" target="_blank">
                            <li className={styles.file}>
                                { fileIsImage(name) ? 
                                    <img className={styles.img} src={imageLink} alt={name} title={name} /> :
                                    <svg className={styles.svg} alt={name} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <title>{name}</title>
                                        <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/>
                                    </svg>
                                }
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

