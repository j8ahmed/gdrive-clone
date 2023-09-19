import { storage } from "~/firebaseConfig"
import { addFiles } from "~/api/firestore/firestore"
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage"
// import { UploadTaskSnapshot, FirebaseStorageError } from "@firebase/storage-types"

export const fileUpload = (event: React.ChangeEvent<HTMLInputElement>, userEmail: string, parentFolderId: string, setProgress: (x: number) => void) => {
    if (event?.target?.files){
        const file = event.target.files[0]

        if (file){
            const storageRef = ref(storage, `files/${file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                    setProgress(progress)
                },
                (error) => {
                    alert(error)
                },
                () => {
                    // Run on completion
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL: string) => {
                            addFiles({
                                name: file.name,
                                isFolder: false,
                                isImage:  fileIsImage(file.name),
                                fileLink: downloadURL,
                                ownerEmail: userEmail,
                                parentFolderId,
                                fileList: [],
                            })
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }
            )
        }
    }
}


function fileIsImage(filename: string){
    const imageFileTypes = ["png", "jpg", "jpeg", "gif", "svg"]
    const regex = new RegExp("\.\([a-z]+\)$", "i")
    const matches = filename.match(regex)
    if (matches){
        const fileType = matches[1]
        return imageFileTypes.includes(fileType)
    }
    return false
}
