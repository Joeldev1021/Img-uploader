import React, { useState } from "react";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import "./index.scss";

export default function DragAndDrop({setFile}) {

  const {
    dragOver,
    fileDropError,
    onDragLeave,
    onDragOver,
    setDragOver,
    setFileDropError,
  } = useDragAndDrop();


  const onDrop = (e) => {
      e.preventDefault();

        setDragOver(false);
        const selectedFile = e.dataTransfer.files[0];
        
        if(selectedFile.type.split('/')[0] !== 'image'){
            setFile(selectedFile);
        }

        setFile(selectedFile)
  }

  const fileSelect = (e) => {
    console.log(console.log(e.target.files[0]));
       let selectedFile = e.dataTransfer.files[0];
      if(selectedFile.type.split('/')[0] !== 'image'){
       return  setFile('Please provide an image file');

      }
      setFileDropError("")
  }

  return (
      <form className="form-area">
        <label
          htmlFor="file"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          style={{ border: `${dragOver ? "2px dashed yellowgreen" : ""}` }}
        >
          <img src="./image.svg" alt="" />
        </label>
        <input onChange={(e)=> fileSelect(e)} type="file" name="file" id="file" />
      </form>
  );
}
