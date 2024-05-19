import React from "react"
import "../style.css"

function Button (images){
const {image,title,event}=images
console.log(image);

return (<div onClick={event} className="imagebox" >
<img title={title} src={image} alt="arrow" />
</div>
)
}
export default Button


