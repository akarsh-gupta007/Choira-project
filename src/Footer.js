import './Style.css';
import mic from './Asset/Mic.png'
import video from './Asset/Video.png'
import speaker from './Asset/speaker.png'
import loading from './Asset/threeDot.jpg'

function Footer(){
    return(
        <>
            <div className='Upper'>
                    <div className='first-footer'>
                        <table className='table'>
                            <td>0004<div>Bar</div></td>
                            <td>0004 <div>Beat</div></td>
                            
                            <td>-  120  + <div>Tempo</div></td>
                            
                            <td>4/4 <div>Cmaj</div> </td>
                        </table>
                        <div className='square'> </div>
                    </div>
                <div className='addIcon'>
                    <span className="end-Meeting">End Meeting</span>
                    <span> <img src={mic} className="icon" /> </span>
                    <span> <img src={video} className="icon" /> </span>
                    <span> <img src={speaker} className="icon" /> </span>
                    <span> <img src={loading} className="icon" /> </span>
                </div>
            </div>
        </>
    )
}

export default Footer;