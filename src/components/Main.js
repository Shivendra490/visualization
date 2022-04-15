import React from 'react'
import Calc from './Calc'
import './Main.css'
import Population from './Graph'

const Main = () => {
  return (
    <div>
      <header>
        <div className='heading'>World Countries Data</div>
        <div className='sub-heading'> Currently we have 250 countries</div>
      </header>

      <div className="button-container">
        <button className="btn">POPULATION</button>
        <button className="btn">LANGUAGES</button>
      </div>

      <div className="pop-heading">
            <span>10 most pupulated countries in the world</span>
        </div>

      <Population/>
      

      



    </div>
  )
}

export default Main
