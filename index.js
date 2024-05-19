import React from "react"

import ReactDOM from "react-dom/client"

import App from "./App.js"
import "./style.css"




let root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App root={root}/>)

// let src1="https://cdn.arrowpng.com/thumbs/red-right-arrow.png"


// YOU CANT USE IMAGE LIKE THISS
// function Button (){
// console.log("image")
// return (<div>
// <img src="./assets/images/red-lft-arrow.png"  alt ="left" />
// </div>
// )
// }
// root.render(< Button />)






// It is OK to use this function-
// function Button (images){
//     const {image} = images
//     console.log(image)
//     return (<div>
//         <img src={image} alt="" />
//     </div>)
// }
// root.render(<Button image="{src1}"/>)



// import left from "./assets/images/left-arrow.png"
// root.render(<Button image={left}/>)





