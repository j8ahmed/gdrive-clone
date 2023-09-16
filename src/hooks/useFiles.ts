import { useState, useEffect } from "react"
import { database } from "~/firebaseConfig"
import { collection, onSnapshot, query, getDocs } from "@firebase/firestore"

interface File {
    imageLink: string; 
    name: string; 
    id: string; 
}

export default function useFiles(){
    const [fileList, setFileList] = useState<File[]>([])

    useEffect(() => {
        try{
            const unsubscribe = onSnapshot(collection(database, "files"), (querySnapshot) => {
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
    }, [])

    return fileList
}
