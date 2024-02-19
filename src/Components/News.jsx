import React from 'react'
import './News.css'
import img from './img/IMAGE (6).png'

export default function News() {
    return (
        <div className='news'>
            <img src={img} alt="" />
            <p className="top-text">
                Latest news
            </p>
            <p className="title">
                Latest news <span className='dif-font'>&</span>New updates
            </p>
            <form>
                <div className="f">
                    <input type="email" name="em" id="em" placeholder='Enter your email' />
                    <button className='form-btn'>SUBSCRIBE</button>
                </div>
                <div className="check">
                    <input type="checkbox" name='checkb' id='checkb' />
                    <label htmlFor='checkb'>Sign up for our newsletter</label>
                </div>
            </form>
        </div>
    )
}
