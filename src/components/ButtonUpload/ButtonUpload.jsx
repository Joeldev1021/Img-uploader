import React from "react";
import "./index.scss";

const ButtonUpload = ({setFile}) => {

 const handleInputChange = (e) => {
    console.log("button upload")
    setFile(e.target.files[0]);
 };

  return (
    <form>
      <input onChange={(e) => handleInputChange(e)} type="file" id="btn-file" className="custom-file" name="image"/>
      <label  htmlFor="btn-file" className="custom-file-btn">
        Choose
      </label>
    </form>
  );
};

export default ButtonUpload;
