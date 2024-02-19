import React from 'react'
import rightImg from './img/image (1).png'
import './Hero.css'


export default function Hero() {
    return (
        <div className='hero' >
            <div className="left">
                <p className="top-text">
                    POMPEO POTTERY
                </p>
                <h1 className="big-text">
                    Unique Porcelain <span className='dif-font'>&</span> Stone Collection
                </h1>
                <p className="bottom-text">
                    Unique & modern pottery made by our master in porcelain & stones
                </p>
                <button>SHOP COLLECTION</button>
            </div>
            <div className="right">
                <img src={rightImg} alt="" />
            </div>
        </div>
    )
}
