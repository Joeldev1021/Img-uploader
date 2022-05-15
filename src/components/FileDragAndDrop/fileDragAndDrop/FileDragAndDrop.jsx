import React, { useEffect, useRef } from 'react'
import "./index.scss"

export default function FileDragAndDrop ({handleUpload}) {
   const refDrop = useRef(null)

   useEffect(() => {
     refDrop.current.addEventListener("dragover", handleDragOver) 
     refDrop.current.addEventListener("drop", handleDrop)
     return () => {
        refDrop.current.removeEventListener("dragover", handleDragOver)
        refDrop.current.removeEventListener("drop", handleDrop)
     }
   }, [])
  

   const handleDragOver = (e) => {
     e.preventDefault()
     e.stopPropagation()
   }

   const handleDrop = (e) => {
     e.preventDefault()
     e.stopPropagation()

     console.log(e.dataTransfer)
   }


  return (
      <div ref={refDrop} className='file-area' >
          <img src="./image.svg" alt="" />
      </div>
  )
}
