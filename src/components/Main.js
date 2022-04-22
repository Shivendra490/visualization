import React, { useState } from 'react'
import Calc from './Calc'
import './Main.css'

import Graph from './Graph'

const Main = () => {
  const [popOrCountry, setPopOrCountry] = useState(true)
  return (
    <div>
      <header>
        <div className='heading'>World Countries Data</div>
        <div className='sub-heading'> Currently, we have 250 countries</div>
      </header>

      <div className="button-container">
        <button className="btn" onClick={()=>{setPopOrCountry(true)}}>POPULATION</button>
        <button className="btn" onClick={()=>{setPopOrCountry(false)}}>LANGUAGES</button>
      </div>

      <div className="pop-heading">
            <span>10 most {popOrCountry ? 'poulated countries' :'spoken languages'} in the world </span>
        </div>

      <Graph popOrCountry={popOrCountry}/>
      

      



    </div>
  )
}

export default Main
