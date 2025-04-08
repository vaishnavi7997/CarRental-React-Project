import React from 'react'
import errorImg from "./assets/error.png"

const NoPage = () => {
  return (
    <div className="container p-5 text-center">
      <img src={errorImg} alt="error" className="errorImage" />
    </div>
  )
}

export default NoPage
