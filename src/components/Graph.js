import React, { useEffect, useState } from 'react'
import Calc from './Calc'
import './Graph.css'

const Graph = (props) => {
  let [countries_data,sortLang,totalLangCount,totalPop]=Calc()

  // let [countries_data,sortLang,totalLangCount,totalPop]=useMemo(() => Calc(), [countries_data,sortLang,totalLangCount,totalPop]);

  // console.log(Array.isArray(countries_data),'jiflisdjilfsdlifjldsijflfid///////////////////////')
  // countries_data.unshift({name:'world',population:totalPop})

 

  
  console.log("calc function",Calc())
  const [totalPop1, setTotalPop1] = useState(totalPop)
  countries_data=[{name:'World',population:totalPop1},...countries_data]
  const [sortedPop1, setSortedPop1] = useState(countries_data)
  const [sortLang1, setSortLang1] = useState(sortLang)
  const [totalLangCount1, setTotalLangCount1] = useState(totalLangCount)
  
  // setSortedPop1([{name:'world',population:totalPop1},...sortedPop1])

  
// console.log(sortLang1);
console.log("sortedpop111111",sortedPop1)
// console.log("totalPop1 graph",totalPop)
console.log('sortlnaguage',Array.isArray(sortLang1));


  
  // console.log('...................hello',sortedPop1,countries_data,sortLang,totalLangCount,totalPop)
  return (
    <>
    {props.popOrCountry ? 
    <div className="outer-main-container">
        

        <div className='all-info-container'>
          { sortedPop1.slice(0,11).map((curElem)=>{
            return(
            <div className="info-comp">
                <div className="name">{curElem.name}</div>
                <div className="outerbar">
                
                  <progress id="file" value={curElem.population/totalPop1*100} max="100">{curElem.population/totalPop1*100} </progress>
                  </div>
                <div className="percent">{curElem.population}</div>
            </div>
            )
          })
          }


        </div>
      </div>

      :

      <div className="outer-main-container">
        

        <div className='all-info-container'>
          { sortLang1.slice(0,10).map((curElem)=>{
            return(
            <div className="info-comp">
                <div className="name">{curElem[0]}</div>
                <div className="outerbar">
                
                  <progress id="file" value={curElem[1]/totalLangCount1*100} max="100"> value={curElem[1]/totalLangCount1*100} </progress>
                  </div>
                <div className="percent">{curElem[1]}</div>
            </div>
            )
          })
          }


        </div>
      </div>
    }
      
    </>
  )
}

export default Graph