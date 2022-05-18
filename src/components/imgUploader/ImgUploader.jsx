import React, { useState } from "react";
import useFirebaseUpload from "../../hooks/useFirebaseUpload";
import ButtonUpload from "../ButtonUpload/ButtonUpload";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import "./index.scss"

const ImgUploader = () => {
  const [file, setFile] = useState(null)

 const {imgUrl, progresspercent} = useFirebaseUpload({file})


  return (
    <div className="container">
      <p className="title">Upload your image</p>
      <p className="text">File should be Jpeg, Png,...</p>
      <DragAndDrop/>
      <span className="or">or</span>
      <ButtonUpload setFile={setFile}/>
     {progresspercent > 0 && <p>{progresspercent}%</p>}
      {imgUrl && <p>{imgUrl}</p>}
    </div>
  );
};

export default ImgUploader;
