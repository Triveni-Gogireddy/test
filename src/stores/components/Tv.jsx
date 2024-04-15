

import React from "react";
import { tvData } from '../data/tv'

const TV = () => {

    const firstFiveImages = tvData.slice(0,5)

    return(
    <>
    <div className="proTitle">
    <h2>TV</h2>
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
export default TV