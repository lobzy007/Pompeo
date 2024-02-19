import React from 'react'
import logo from './img/shopping_cart_FILL0_wght400_GRAD0_opsz24.png'
import './Navbar.css'
import menu from './img/menu_FILL0_wght400_GRAD0_opsz24.png'

export default function Navbar() {
    return (
        <div className='navbar'>
            <h3 className="logo">
                Pompeo
            </h3>
            <input type="checkbox" name="menu" id="menu" />
            <label htmlFor="menu"><img src={menu} alt="menu" /></label>
            <ul>
                <label htmlFor="menu"><img src={menu} alt="menu" /></label>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
                <li className="cart"><img src={logo} alt="" /> Cart</li>
            </ul>
        </div>
    )
}
