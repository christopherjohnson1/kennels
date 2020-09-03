import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"

export const CustomerList = () => {
    const {customers, getCustomers} = useContext(CustomerContext)

    useEffect(() => {
        console.log(" **** Locations before state pulled from API ****")
        getCustomers()
    }, [])

    useEffect(() => {
        console.log(" **** Locations after state pulled from API ****")
    }, [customers])

    return (
        <article className="customers">
            {
                customers.map(customer => {
                    return <section key={customer.id} className="customer">
                        <div><h3>{ customer.name }</h3></div>
                        <div>{ customer.address }</div>
                    </section>
                })
            }
        </article>
    )
}