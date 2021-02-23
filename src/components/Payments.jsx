import React from 'react'
import { Dataprovider }  from './Context'

const Payments = () => {
    const { total } = React.useContext(Dataprovider)
    return (
        <div>
            <h2 style={{textAlign : 'center'}}>TOTAL PAYMENT</h2>
            <h4 style={{textAlign : 'center'}}>{ total} Rs</h4>
        </div>
    )
}

export default Payments
