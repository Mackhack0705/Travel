import React from 'react'
import "../style/customers.css"

const Customers = () => {
  return (
    <div className='customer-table'>
      <div className='fl table-items'>
        <p>9,313</p>
        <p>No. of Travels</p>
      </div>
      <div className='fl table-items'>
        <p>8,492</p>
        <p>No. of Clients</p>
      </div>
      <div className='fl table-items'>
        <p>100</p>
        <p>No. of Employees</p>
      </div>
      <div className='fl table-items'>
        <p>120</p>
        <p>No. of Countries</p>
      </div>
    </div>
  )
}

export default Customers
