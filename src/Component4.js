import React from 'react'
import "./Style.css"
const Component4 = () => {
    return (

        <div>
            <p className='host'>(Host)</p>
            <div className='component4'>
                <video className='fourthpage1' controls autoPlay="true">

                    <source src='./firstvideo.mp4' type='mp4' />
                </video>
                <video className='fourthpage2' controls autoPlay="true">

                    <source src='./firstvideo.mp4' type='mp4' />
                </video>
                <video className='fourthpage3' controls autoPlay="true">

                    <source src='./firstvideo.mp4' type='mp4' />
                </video>
                <video className='fourthpage3' controls autoPlay="true">

                    <source src='./firstvideo.mp4' type='mp4' />
                </video>
            </div>

        </div>
    )
}

export default Component4