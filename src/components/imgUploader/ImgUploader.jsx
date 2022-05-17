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
      <p className="title">Upload your image</p>
      <p className="text">File should be Jpeg, Png,...</p>
      <FileDragAndDrop/>
      <span className="or">or</span>
      <form >
        <input type="file" id="file" className="custom-file" name="image"  />
       <label htmlFor="file" className="custom-file-btn">Choose</label>
      </form>
     {progresspercent > 0 && <p>{progresspercent}%</p>}
      {imgUrl && <p>{imgUrl}</p>}
    </div>
  );
};

export default ImgUploader;
