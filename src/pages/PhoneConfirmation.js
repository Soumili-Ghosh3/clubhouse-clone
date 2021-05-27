import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import style from '../style/phoneConfirm.module.css'

function PhoneConfirmation() {
    const {value, setValue} = useState();
    return (
        <div className={style.phoneConfirmConatiner}>
            <h1> Enter your phone </h1>
        </div>
    )
}

export default PhoneConfirmation
