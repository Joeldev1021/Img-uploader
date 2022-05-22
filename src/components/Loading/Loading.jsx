import React from 'react'
import './index.scss'

const Loading= () => {
  return (
    <div className="loading">
        <p>Uploading...</p>
        <div className="loading-bar"></div>
    </div>
  )
}

export default Loading