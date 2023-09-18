import { database } from "~/firebaseConfig"
import { collection, addDoc } from "@firebase/firestore"
import { File } from "@/Interface/"

const files = collection(database, "files")

export const addFiles = (payload: File) => {
    try{
        addDoc(files, payload)
    } catch(err){
        console.log(err)
    }
}

export const addFolder = (payload: File) => {
    try{
        console.log(payload)
        addDoc(files, payload)
    } catch(err){
        console.log(err)
    }
}
