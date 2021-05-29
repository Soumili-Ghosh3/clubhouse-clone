import React, {useState, useEffect} from 'react'
import style from '../style/roomCard.module.css'
import data from '../data/roomCard.json'

function RoomInfoCard(props) {
    return (
        <>
            <h2> Room Info Card </h2>
            {data.map((item) => (
                <div>
                    <div>
                        <div className={style.roomCardContainer}>
                            <h6>{item.title}</h6>
                            <h2>{item.sub_title}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default RoomInfoCard
