

import React from "react";
import { acData } from '../data/ac'

const AC = () => {

    const firstFiveImages = acData.slice(0,5)

    return(
        <>
        <div className="proTitle">
        <h2>Air Condition</h2>
        </div>
        <div className="proSection">
        {
            firstFiveImages.map((item,index)=>{
                console.log(item.image)
                return(
                    <div key={index} className="imgBox">
                      <img className="proImage" src={item.image} alt=""/> 
                    </div>
                    
                )
            })
        }
    </div>
        </>
       
    )
}
export default AC