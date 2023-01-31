import React from 'react'
import "./Style.css"
const Component1 = () => {
  return (
    <>
     <p className='host'>(Host)</p>
        <video className='firstpage' controls autoPlay="true">
           
            <source src='./firstvideo.mp4' type='mp4'/>
        </video>
    </>
  )
}

export default Component1