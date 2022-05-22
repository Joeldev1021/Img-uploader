import React from 'react'
import "./index.scss"

const ImgSuccess = ({imgUrl}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const $imgUrl = document.getElementById("img-url") 
    $imgUrl.select();
    navigator.clipboard.writeText($imgUrl.value);

  }

  return (
    <div className='container'>
        <img className='img-success' src="./check.png" alt="successfully" />
        <p>Uploaded Successfully!</p>
        <img className='img-uploaded' src={imgUrl}  alt="city" />
        <form className='form-link' onSubmit={(e)=> handleSubmit(e)}>
            <input type="text" id="img-url" defaultValue={imgUrl} />
             <button>Copy Link</button>
        </form>
    </div>
  )
}

export default ImgSuccess 