import React from 'react'
import style from '../style/phoneConfirm.module.css'
import {Link} from 'react-router-dom'

function CodeConfirm() {
    return (
        <div className={style.phoneConfirmContainer}>

            <Link exact to="/get_username" className={style.backBtn}>
                <img src="/images/arrow.png" alt="" />
            </Link>
            <div className="text-center">
            <h1 style={{width: "100%", maxWidth: '350px', marginBottom: '1em'}}> 
                Enter the code we just texted you
            </h1>

            <input type="text"
            style={{
                width: "100%", 
                border: "none",
                textAlign: "center",
                outline: "none",
                }} />

            <p className="mt-2">Didn't recieve it? 
                <span> Tap to resend. </span>
            </p>
            </div>

            <Link exact to="/allow_notification" className='primaryBtn d-flex align-items-center'>
                Next  <img src="/images/nextArrowIcon.svg" className="ml-1" alt="" />
            </Link>
        </div>
    )
}

export default CodeConfirm