import React from 'react'
import './Products.css'
import gold from './img/IMAGE (3).png'
import orange from './img/IMAGE (4).png'

export default function Products() {
    return (
        <div className='Products'>
            <div className="product one">
                <div className="img">
                    <img src={gold} alt="" />
                    <div className="gray"></div>
                </div>
                <div className="text">
                    <p className="title">
                        Gold & Black Pottery
                    </p>
                    <p className="txt">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.
                    </p>
                    <a href="#">View Details</a>
                </div>
            </div>
            <div className="product two">
                <div className="text">
                    <p className="title">
                        Gold & Black Pottery
                    </p>
                    <p className="txt">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.
                    </p>
                    <a href="#">View Details</a>
                </div>
                <div className="img">
                    <img src={orange} alt="" />
                    <div className="gray"></div>
                </div>
            </div>
        </div>
    )
}
