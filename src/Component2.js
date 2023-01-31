import React from 'react'
import "./Style.css"
const Component2 = () => {
    return (
        <>

            <p className='host'>(Host)</p>
            <div className='component2'>
                <video className='secondpage' controls autoPlay="true">

                    <source src='./firstvideo.mp4' type='mp4' />
                </video>
                <video className='secondpage' controls autoPlay="true">

                    <source src='./firstvideo.mp4' type='mp4' />
                </video>
            </div>

        </>
    )
}

export default Component2