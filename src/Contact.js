import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = (myprop) => {
  const [customers, setCustomers] = useState(myprop.customer)

  return (
    <div>
      {customers.map((customerList) => {
        return (<div>
          <h1>{customerList.name}</h1>
          <h2>{customerList.age}</h2>
          <h4>{customerList.gender}</h4>
          <hr/>
          </div>)
      })}
      <h1>This is my contact number {myprop.telInfo}</h1>
    </div>
  )
}

export default Contact
