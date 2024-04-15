

import React from "react";
import { booksData } from "../stores/data/books";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";

const BooksSingle = () => {
const {id} = useParams()

const product =  booksData.find((item)=>item.id === id)

    return(
          
        <>
       <Navbar />

        <div className="ind-section">
            <div className="ind-image">
                <img src={product.image} alt="" />
            </div>
           <div className="ind-details space">
            <div className="ind-company">
                <h2>{product.title}</h2>

            </div>
           <div className="ind-model space">
                <h3>{product.author}</h3>
            </div>
            <div className="ind-price space">
                <h2>{product.price}</h2>

            </div>
            <div className="ind-desc space">
                <p>{product.description}</p>

            </div>
            <button> Add to cart</button>

           </div>
        </div>
        </>
    )
}
export default BooksSingle