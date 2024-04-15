

import React from "react";
import { booksData } from '../data/books'

const Books = () => {

    const firstFiveImages = booksData.slice(0,5)

    return(
    <>
    <div className="proTitle">
    <h2>Books</h2>
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
export default Books