import React, { useState } from "react";
import useFirebaseUpload from "../../hooks/useFirebaseUpload";
import ButtonUpload from "../ButtonUpload/ButtonUpload";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import "./index.scss"

const ImgSelection = ({setFile}) => {

  return (
    <div className="container">
      <p className="title">Upload your image</p>
      <p className="text">File should be Jpeg, Png,...</p>
      <DragAndDrop setFile={setFile}/>
      <span  className="or">or</span>
      <ButtonUpload setFile={setFile}/>
    </div> 
  );
};

export default ImgSelection;
