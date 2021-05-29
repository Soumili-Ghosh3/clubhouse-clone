import React, {useState} from 'react'
import DailyInfoCard from '../components/DailyInfoCard'
import Header from '../components/Header'
import RoomInfoCard from '../components/RoomInfoCard'
import style from '../style/home.module.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsGrid3X3Gap} from 'react-icons/bs'
import data from '../data/roomCard.json'
import BottomSheet from '../components/BottomSheet'

function Home() {
    const [itemVisible, setItemVisible] = useState(true);
    const [sheetVisible, setSheetVisible] = useState(false);
    const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
    const [loaderVisibility, setLoaderVisibility] = useState(false);
    const [cardId, setCardId] = useState(1);

    return (
        <>
            <Header />
            <div className={style.home_container}>
                <DailyInfoCard />
                <RoomInfoCard />
            </div>
            <div className={style.action_btn}>
                <button onClick={() => setSheetVisible(true)}>
                    <AiOutlinePlus className="mr-2" />
                    Start a room
                </button>
                <button>
                    <BsGrid3X3Gap />
                </button>
            </div>
            <BottomSheet
            sheetTitle='start room'
            setSheetVisible={(item) => setSheetVisible(item)}
            sheetVisible={sheetVisible}
            cardDetail={data.find((item) => item.id == cardId)}
            setItemsVisible={(item) => setItemVisible(item)}
            setSheetCreateRoom={(item) => {
                setLoaderVisibility(true);
                setTimeout(() => {
                    setSheetCreateRoom(item);
                    setLoaderVisibility(false);
                }, 1000);
            }}
            />
        </>
    );
}

export default Home
