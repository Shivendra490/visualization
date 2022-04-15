import React, { useEffect, useState } from 'react'
import Calc from './Calc'
import './Graph.css'

const Graph = () => {
  const [countries_data,sortLang,totalLangCount,totalPop]=Calc()
  const [sortedPop1, setSortedPop1] = useState(countries_data)
  const [sortLang1, setSortLang1] = useState(sortLang)
  const [totalLangCount1, setTotalLangCount1] = useState(totalLangCount)
  const [totalPop1, setTotalPop1] = useState(totalPop)
console.log(sortLang1);
  useEffect(() => {
    
  
  
  }, [])
  
  console.log('...................',sortedPop1,countries_data,sortLang,totalLangCount,totalPop)
  return (
    <>
    <div className="outer-main-container">
        

        <div className='all-info-container'>
          { sortedPop1.slice(0,10).map((curElem)=>{
            return(
            <div className="info-comp">
                <div className="name">{curElem.name}</div>
                <div className="outerbar">
                
                  <progress id="file" value="92" max="100"> 32% </progress>
                  </div>
                <div className="percent">{curElem.population}</div>
            </div>
            )
          })
          }

            {/* <div className="info-comp">
                <div className="name">sec</div>
                <div className="outerbar">
                    <div className="bar2">nfdsn</div>
                </div>
                <div className="percent">per</div>
            </div> */}
        </div>
      </div>
    </>
  )
}

export default Graph