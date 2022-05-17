import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { storage } from '../firebase';

export default function useFirebaseUpload ({file}){

    const [imgUrl, setImgUrl] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);

    useEffect(() => {

     handleFileUpload(file) 
    }, [file])

 const handleFileUpload =(file) => {

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadImg = uploadBytesResumable(storageRef, file);

    uploadImg.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadImg.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    ); 
 }
   return {imgUrl, progresspercent};
}
