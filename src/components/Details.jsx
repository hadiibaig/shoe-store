import React from 'react'
import { Dataprovider } from "./Context";
import { useParams , Link } from "react-router-dom"

import Colors from './Colors'
import "./Details.css"

const Details = () => {
    const { products , addCart }= React.useContext(Dataprovider)
    const { id } = useParams()
    const shoe = products.filter(item => {return item.id === id})
  
     return !shoe.length ? <h1>Product Not Found.</h1> : (
        <div>
        {
              shoe.map(value =>(
                <div className="details" key={value.id}>
                    <img src={value.src} alt=""/>
                    <div className="box">
                        <div className="row">
                            <h2>{value.title}</h2>
                            <span>{value.price}Rs</span>
                        </div>
                        <Colors colors={value.colors}/>
                        <p>{value.description}</p>
                        <p>{value.content}</p>
                        <Link to="/cart" className="cart" onClick={() => addCart(value.id)}>
                            Add to cart
                        </Link>
                    </div>
                </div>
            ))
        }
        </div>
    )
    }

export default Details
