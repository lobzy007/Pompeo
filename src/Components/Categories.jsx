import './Categories.css'
import vase from './img/IMAGE.png'
import mug from './img/IMAGE (1).png'
import plate from './img/IMAGE (2).png'

import React from 'react'

export default function Categories() {
    return (
        <div className='Categories'>
            <p className='rotated'>Hand Craft Pottery</p>
            <p className="top-text">
                Product Categories
            </p>
            <h1 className="title">
                Porcelain <span className='dif-font'>&</span> Pottery
            </h1>
            <div className="products">
                <div className="product-1">
                    <div className="p-in">
                        <img src={vase} alt="" />
                        <p>VASES</p>
                    </div>
                </div>
                <div className="product-2">
                    <div className="p-in">
                        <img src={mug} alt="" />
                        <p>MUGS</p>
                    </div>
                </div>
                <div className="product-3">
                    <div className="p-in">
                        <img src={plate} alt="" />
                        <p>PLATES</p>
                    </div>
                </div>
            </div>
            <div className="articles">
                <div className="ar">
                    <h2>Hand Crafted</h2>
                    <h2>Pottery since 1990</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                </div>
                <div className="ar">
                    <h2>We Provide Premium</h2>
                    <h2>Pottery Produts</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                </div>
            </div>

            <hr />
        </div>
    )
}
