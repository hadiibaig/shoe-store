import React from 'react'
import { Link } from 'react-router-dom';
import { Dataprovider } from "./Context";

import "./products.css"

const Products = () => {
    const  {products , addCart } = React.useContext(Dataprovider)
    return (
        <div id="product">
            { products.map(product =>(
                <div className="card" key={product.id}>
                <Link to={`/products/${product.id}`}><img src={product.src} alt=""/></Link>
                <div className="content" key={product.id}>
                <h3>
                <Link to={product.id}>{product.title}</Link>
                </h3>
                <span>{product.price}Rs</span>
                <p>{product.description}</p>
                <button onClick={() => addCart(product.id)}>Add to CART</button>
                </div>
                </div>
            )) }
        </div>
    )
}

export default Products
