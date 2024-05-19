import React, { useState } from 'react'

// export default function Counter() {
    
//     let myarr=useState(1)
//     console.log(myarr)
//   return (
//     <div style={
//         {textAlign:"center",
        
//         }
//     }>
//        <h2>{myarr[0]}</h2>
//        <button onClick={()=>{
//         myarr[1](myarr[0]+1) 
//         console.log(myarr[0])
//        }} >Increase</button>
//     </div>
//   )
// }



export default function Counter() {
  const arr = useState(0);
  function gari(){
    // arr[1](arr[0]+1)
    // arr[1](arr[0]+1)
    arr[1]((prevst)=>prevst+1)
    arr[1]((prevst)=>{
     return  prevst+1
    })
  
    console.log(arr[0])
    }
  return (
    <div style={
      {textAlign:'center'}
    }>
      <p>{arr[0]}</p>
      <button onClick={gari}>Increase</button>
    </div>
  )
}
