import './Footer.css'
import React from 'react'
import email from './img/IMAGE (7).png'
import adress from './img/IMAGE (8).png'
import call from './img/IMAGE (9).png'

export default function Footer() {
  return (
      <div className='footer'>
          <p className="logo">Pompeo</p>
          <p className="d">I have always striven to fix beauty in wood, stone,</p>
          <p className="d">glass or pottery, that has been my creed.</p>

          <div className="cards">
              <div className="card">
                  <img src={email} alt="" />
                  <p className="t">EMAIL</p>
                  <p className="d">pompeopotery@gmail.com</p>
              </div>
              <div className="card">
                  <img src={adress} alt="" />
                  <p className="t">FIND</p>
                  <p className="d">Central Park, Manhattan</p>
                  <p className="d">New York, 1101</p>
              </div>
              <div className="card">
                  <img src={call} alt="" />
                  <p className="t">CALL</p>
                  <p className="d">+1 292 345 678</p>
              </div>
          </div>

          <div className="bottom">
              <p className="b">Template design by</p>
              <p className="a">Dorian Hoxha</p>
              <p className="b">-</p>
              <p className="a">Image License Info</p>
              <p className="b">Powered by</p>
              <p className="a">Webflow</p>
          </div>
    </div>
  )
}
