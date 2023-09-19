import { database } from "~/firebaseConfig"
import { collection, doc, addDoc, updateDoc } from "@firebase/firestore"
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
        addDoc(files, payload)
    } catch(err){
        console.log(err)
    }
}

// Update a single field on one document that is a "File" ("isFolder": false)
export const updateFileField = (docId: string, field: keyof File, payload: Partial<File>) => {
    const fileDoc = doc(files, docId)
    try{
        updateDoc(fileDoc, {
            [field]: payload[field]
        })
    } catch(err){
        console.log(err)
    }
}

// Update folder and all of it's files / nested folders
export const updateFolderField = (docId: string, field: keyof File, payload: Partial<File>) => {
    //const fileDoc = doc(files, docId)
    //try{
    //    updateDoc(fileDoc, {
    //        field: payload[field]
    //    })
    //} catch(err){
    //    console.log(err)
    //}
}

