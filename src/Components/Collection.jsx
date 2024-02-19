import React from 'react'
import './Collection.css'
import cardImg from './img/IMAGE (5).png'

export default function Collection() {
  return (
      <div className='Collection'>
          <p className="top-text">
              Our online store
          </p>
          <p className="title">
              Pottery Collection
          </p>

          <div className="cards">
              <div className="card">
                  <div className="img">
                      <img src={cardImg} alt="" />
                  </div>
                  <div className="txt">
                      <p className="name">
                          Decor Plate
                      </p>
                      <p className="cost">
                          $ 65.00 USD
                      </p>
                  </div>
              </div>
              <div className="card">
                  <div className="img">
                      <img src={cardImg} alt="" />
                  </div>
                  <div className="txt">
                      <p className="name">
                          Decor Plate
                      </p>
                      <p className="cost">
                          $ 65.00 USD
                      </p>
                  </div>
              </div>
              <div className="card">
                  <div className="img">
                      <img src={cardImg} alt="" />
                  </div>
                  <div className="txt">
                      <p className="name">
                          Decor Plate
                      </p>
                      <p className="cost">
                          $ 65.00 USD
                      </p>
                  </div>
              </div>
              <div className="card">
                  <div className="img">
                      <img src={cardImg} alt="" />
                  </div>
                  <div className="txt">
                      <p className="name">
                          Decor Plate
                      </p>
                      <p className="cost">
                          $ 65.00 USD
                      </p>
                  </div>
              </div>
              <div className="card">
                  <div className="img">
                      <img src={cardImg} alt="" />
                  </div>
                  <div className="txt">
                      <p className="name">
                          Decor Plate
                      </p>
                      <p className="cost">
                          $ 65.00 USD
                      </p>
                  </div>
              </div>
              <div className="card">
                  <div className="img">
                      <img src={cardImg} alt="" />
                  </div>
                  <div className="txt">
                      <p className="name">
                          Decor Plate
                      </p>
                      <p className="cost">
                          $ 65.00 USD
                      </p>
                  </div>
              </div>
          </div>

          <button className='buy'>View All Products</button>
    </div>
  )
}
