

import React from "react";
import { watchData } from '../data/watch'

const Watches = () => {

    const firstFiveImages = watchData.slice(0,5)
    return(
        <>
        <div className="proTitle">
        <h2>Watches</h2>
        </div>
    <div className="proSection">
        {
            firstFiveImages.map((item,index)=>{
                console.log(item.image)
                return(
                    <div key={index} className="imgBox">
                      <img className="proImage" src={item.image} alt="image" /> 
                    </div>
                    
                )
            })
        }
    </div>
    </>
        
    )
}
export default Watches