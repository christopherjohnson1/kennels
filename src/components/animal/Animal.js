import React from "react"
import "./Animal.css"

export const Animal = ({animal, owner, location}) => (
    <section key={animal.id} className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div>Owner: {owner.name}</div>
        <div>Location: {location.name}</div>
    </section>
)