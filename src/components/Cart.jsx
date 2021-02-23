import React from 'react'
import { Dataprovider } from './Context'
import { Link } from 'react-router-dom'

import Colors from './Colors'
import "./Details.css"
import "./cart.css"

const Cart = () => {
    const { cart , increase , decrease , removeProduct , total , getTotal} = React.useContext(Dataprovider)
    React.useEffect(() => {
         getTotal()
    },[getTotal])
    return  (!cart.length)? <h3> Cart is empty </h3> : ( <div>
            {
                cart.map(value =>(
                    <div className="details" key={value.id}>
                        <img src={value.src} alt=""/>
                        <div className="box">
                            <div className="row">
                                <h2>{value.title}</h2>
                                <span>{value.price * value.count}Rs</span>
                            </div>
                            <Colors colors={value.colors}/>
                            <p>{value.description}</p>
                            <p>{value.content}</p>
                            <div className="amount">
                            <button className="count" onClick={() => decrease(value.id)}> - </button>
                            <span>{value.count}</span>
                            <button className="count" onClick={() => increase(value.id)}> + </button>
                        </div>
                        </div>
                        <div className="delete" onClick={() => removeProduct(value.id)}>X</div>
                        </div>
                ))
            }
            <div className="total">
                        <Link to="/payments">Payment</Link>
                        <h3>Total : Rs {total}</h3>
                    </div>
            </div> ) 
            }

export default Cart
