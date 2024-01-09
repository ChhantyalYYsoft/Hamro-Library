import React from 'react'

function ImageUploadSection() {
    const handleSubmit=()=>{
        console.log("submited")
    }
  return (
    <>
    <form onSubmit={handleSubmit} className='form'>
        <input type='file' />
        <button type='submit'>Upload</button>
      </form>
        <img className='profileImg' src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
    </>
  )
}

export default ImageUploadSection