
import Countries_data from './Data/countries_data'

const Calc = () => {
  
  let countries_data=Countries_data
    let i;
    let totalPop=0;
    
    const lang={}
   console.log(countries_data.length)
   for(i=0;i<countries_data.length;i++)
   {
        totalPop=totalPop+countries_data[i].population;
        // console.log(i,pop)
        
        const {languages}=countries_data[i]
        //console.log(languages);
        for(let j of languages){
            if (lang.hasOwnProperty(j)){
              lang[j]=lang[j]+1
              
            }
            else{
              lang[j]=1
              
            }
        }
        // console.log(lang,Object.keys(lang).length,"length of total lang......")
   }
  //  console.log(lang,Object.keys(lang).length,"length of total lang......")
   const totalLangCount=Object.keys(lang).length
  // console.log(lang,Object.keys(lang).length,'totallang')
  //  const sortLang=Object.keys(lang).sort((a,b)=>lang[b]-lang[a])
  //  console.log(sortLang,"sort lang ;........")
const sortLang=[]
   for(let i in lang){
     sortLang.push([i,lang[i]])
   }
   
  //  console.log(Object.keys(lang))
   sortLang.sort((a,b)=>{
     return b[1]-a[1]
   })


  //  console.log(typeof sortLang,"sort Language .........................................")

   countries_data.sort((a,b)=>{
     if(a['population']<b['population']) return 1
     if(a['population']>b['population']) return -1
     return 0
   })

  //  console.log('calc',countries_data[0])
  console.log("total pop calc",totalPop)



   //countries_data.unshift({name:'world',population:totalPop,languages:[]})
  // return [countries_data,sortLang,totalPop]
  return [countries_data,sortLang,totalLangCount,totalPop]
  
}

export default Calc