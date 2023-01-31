import React from 'react'
import "./Style.css"
const Component3 = () => {
    return (
        <div>
            <p className='host'>(Host)</p>
            <div className='component3'>
                <video className='thirdpage1' controls autoPlay="true">

                    <source src='./firstvideo.mp4' type='mp4' />
                </video>
                <video className='thirdpage2' controls autoPlay="true">

                    <source src='./firstvideo.mp4' type='mp4' />
                </video>
                <video className='thirdpage3' controls autoPlay="true">

                    <source src='./firstvideo.mp4' type='mp4' />
                </video>
            </div>

        </div>
    )
};

export default Component3