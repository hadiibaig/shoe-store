import React from 'react'
import { Header } from "./Header";
import { BrowserRouter as Router } from "react-router-dom"
import Section from './Section';
import { Context } from './Context';


 const Routes = () => {
    return (
        <Context>
        <div>
        <Router>
        <Header />
        <Section />
        </Router>
        </div>
        </Context>
    )
}

export default Routes