import { storage } from "~/firebaseConfig"
import { addFiles } from "~/api/firestore/firestore"
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage"
// import { UploadTaskSnapshot, FirebaseStorageError } from "@firebase/storage-types"

export const fileUpload = (event: React.ChangeEvent<HTMLInputElement>, setProgress: (x: number) => void) => {
    if (event?.target?.files){
        console.log(event.target.files[0])

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
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL: string) => {
                            console.log(downloadURL)
                            addFiles(downloadURL)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }
            )
        }
    }
}
