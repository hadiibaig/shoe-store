import React , { useState }from 'react'
import Menu from "./../Icons/bars-solid.svg"
import CartIcon from './../Icons/cart-plus-solid.svg'
import "./Header.css";
import  { Dataprovider } from './Context'

import { Link } from "react-router-dom"

export const Header = () => {
    const { cart } = React.useContext(Dataprovider)
    const [toggle , settoggle] = useState(false)
    const toggleMenu = () =>{
       settoggle(!toggle)
    }

    return (
        <header>
        <div className="menu" onClick={() => toggleMenu}>
        <img src={Menu} alt="" width="20"/>
        </div>
        <div className="logo"><h1><Link to="/">Nike</Link></h1></div>
        <nav>
        <ul className= {toggle? "toggle" : ""}>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contacts'>Contacts</Link></li>
        </ul>
        <div className="nav-cart">
        <span>{cart.length}</span>
        <Link to="/cart"><img src={CartIcon} alt="" width="20"/></Link>
        </div>
        </nav>
        </header>
    )
}
