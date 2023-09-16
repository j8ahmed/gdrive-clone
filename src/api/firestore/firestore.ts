import { database } from "~/firebaseConfig"
import { collection, addDoc } from "@firebase/firestore"

const files = collection(database, "files")

export const addFiles = (imageLink: string) => {
    try{
        addDoc(files, { imageLink })
    } catch(err){
        console.log(err)
    }
}
