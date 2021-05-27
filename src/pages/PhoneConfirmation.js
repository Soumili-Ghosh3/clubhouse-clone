import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import style from '../style/phoneConfirm.module.css'

function PhoneConfirmation() {
    const {value, setValue} = useState();
    return (
        <div className={style.phoneConfirmContainer}>
            <Link exact to="/" className={style.backBtn}>
                <img src="" alt="" />
            </Link>
            <h1> Enter your phone </h1>

            <PhoneInput international defaultCountry="IN"
            value={value} />

            <p>By entering your number, you are agreeing to our {" "}
                <span>
                    Terms of Service and Privacy Policy. 
                </span>
                Thanks!
            </p>
        </div>
    )
}

export default PhoneConfirmation
