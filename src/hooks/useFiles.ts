import { useState, useEffect } from "react"
import { database } from "~/firebaseConfig"
import { collection, onSnapshot, query, where, getDocs } from "@firebase/firestore"
import { File } from "@/Interface/"

export default function useFiles(parentFolderId = "", ownerEmail = ""){
    const [fileList, setFileList] = useState<File[]>([])

    useEffect(() => {
        try{
            const q = query(
                collection(database, "files"), 
                where("parentFolderId", "==", parentFolderId), 
                where("ownerEmail", "==", ownerEmail)
            )
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                setFileList(
                    querySnapshot.docs.map(doc => {
                        return {...doc.data(), id: doc.id} as File
                    })
                )
            })
            return unsubscribe
        } catch(err){
            console.log(err)
        }
    }, [parentFolderId, ownerEmail])

    return fileList
}
