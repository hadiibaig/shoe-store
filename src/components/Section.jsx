import React from 'react'
import Details from "./Details"
import Products from './Products'
import Cart from './Cart'
import Payments from './Payments'

import { Route } from 'react-router-dom'
const Section = () => {
    return (
       <div className="section">
       <Route path="/products" component={Products} exact />
       <Route path="/products/:id" component={Details} />
       <Route path="/cart" component={Cart} exact/>
       <Route path="/payments" component={Payments} exact/>
       </div>
    )
}

export default Section
