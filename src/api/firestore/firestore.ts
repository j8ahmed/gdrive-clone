import { database } from "~/firebaseConfig"
import { collection, addDoc } from "@firebase/firestore"

const files = collection(database, "files")

export const addFiles = (imageLink: string, name: string) => {
    try{
        addDoc(files, { imageLink, name })
    } catch(err){
        console.log(err)
    }
}
