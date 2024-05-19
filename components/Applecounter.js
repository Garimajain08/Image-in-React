import Button from "./Button"
import  leftimg from "../assets/images/left-arrow.png"
import React, { useState } from "react"
import Basket from "./Basket"
import ReactDOM from "react-dom"
const rightimg = "https://cdn.arrowpng.com/thumbs/red-right-arrow.png"
import "../style.css"

// let leftapple=10;
// let rightapple =0;
// let root = ReactDOM.createRoot(document.querySelector('#root'));





function Applecounter( ){
const totalapple = 10;
   let  leftbasketcount =  useState(10)
   let rightbasketcount = useState(0)
    function rightbasket(){
        if(rightbasketcount[0]<10)
        {
        leftbasketcount[1](leftbasketcount[0]-1);
        // rightbasketcount[1](rightbasketcount[0]+1);
        rightbasketcount[1]((prevst)=>prevst+1)
       
        console.log("Right Basket")}
        }
        function leftbasket(){
            if(leftbasketcount[0]<10)
           { 
           leftbasketcount[1](leftbasketcount[0]+1)
           rightbasketcount[1](rightbasketcount[0]-1)
        
            // root.render(<Applecounter />);
            console.log("Left Basket")}
        }
    
    return(
        <div className="applecounter">
            <Basket basketnumber="1" apple={leftbasketcount[0]} children="Left Basket" />
            <Button image={rightimg} title="Right arrow" event={rightbasket} />
            
            <Button image={leftimg} title="Left arrow" event={leftbasket}/>
            <Basket basketnumber=" 2" apple={rightbasketcount[0]}>Right Basket</Basket> 
        </div>
    )
}
export default Applecounter