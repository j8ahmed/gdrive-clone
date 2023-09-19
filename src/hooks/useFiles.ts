import { useState, useEffect } from "react"
import { database } from "~/firebaseConfig"
import { collection, onSnapshot, query, where, or, and, getDocs } from "@firebase/firestore"
import { File } from "@/Interface/"

export default function useFiles(parentFolderId = "", userEmail = ""){
    const [fileList, setFileList] = useState<File[]>([])

    useEffect(() => {
        try{
            /*
             * Include files that:
             * - Have the matching parent folder ID
             * - Have the matching ownerEmail or sharedWith Email as Current User
             */
            const q = query(
                collection(database, "files"),
                and(
                    where("parentFolderId", "==", parentFolderId), 
                    or(
                        where("ownerEmail", "==", userEmail),
                        where("sharedWith", "array-contains", userEmail)
                    )
                )
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
    }, [parentFolderId, userEmail])

    return fileList
}
