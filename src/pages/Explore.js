import React from 'react'
import style from '../style/explore.module.css'
import {DownOutlined, FireOutlined} from '@ant-design/icons'
import data from '../data/Explore.json'

function Explore() {
    const {people, conversation} = data;

    return (
        <div className={style.exploreContainer}>
            <h6> PEOPLE TO FOLLOW </h6>
            <div className={style.peopleContainer}>
                {people.map((item) => (
                    <div>
                        <div className='d-flex align-items-center'>
                            <img src="/images/user-img.jpg" alt="" />
                            <div className="ml-2">
                                <h5>
                                    {item.title}
                                </h5>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                ))}
                <button className={style.showMore}>
                    Show more people <DownOutlined />
                </button>
            </div>
        </div>
    )
}

export default Explore
