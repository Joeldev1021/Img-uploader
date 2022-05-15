import React, { useState } from "react";
import FileDragAndDrop from "../FileDragAndDrop/fileDragAndDrop/FileDragAndDrop";
import "./index.scss"
const ImgUploader = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
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
  };

  return (
    <div className="container">
      <h1 className="title">Upload your image</h1>
      <FileDragAndDrop/>
      <p>or</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="file" name="image" className="input-file" />
        <button type="submit">Upload</button>
      </form>
      {progresspercent > 0 && <p>{progresspercent}%</p>}
      {imgUrl && <p>{imgUrl}</p>}
    </div>
  );
};

export default ImgUploader;
