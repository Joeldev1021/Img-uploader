import React from 'react'
import ImgSuccess from '../ImgSuccess/ImgSuccess'
import Loading from '../Loading/Loading'

const Uploader = ({progressPercent, imgUrl}) => {
  return (
      <>
       {progressPercent !== 100 
       ? <Loading progressPercent={progressPercent} /> 
       : <ImgSuccess imgUrl={imgUrl} />}
      </>
  )
}

export default Uploader