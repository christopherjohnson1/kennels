import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"

export const AnimalList = () => {
    const {animals, getAnimals} = useContext(AnimalContext)
    const {customers, getCustomers} = useContext(CustomerContext)
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getAnimals().then(getCustomers).then(getLocations)
    }, [])

    return (
        <article className="animals">
            {
                animals.map(animal => {
                    const owner = customers.find(customer => customer.id === animal.customerId) || {}
                    const location = locations.find(location => location.id === animal.locationId) || {}
                    return <section key={animal.id} className="animal">
                        <div><h3>{ animal.name }</h3></div>
                        <div>Breed: { animal.breed }</div>
                        <div>Owner: { owner.name }</div>
                        <div>Location: { location.name }</div>
                    </section>
                })
            }
        </article>
    )
}