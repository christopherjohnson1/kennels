import React from "react"
import "./Employee.css"

export const Employee = ({employee, location}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__key">Employee Number: {employee.id}</div>
        <div className="employee__storeLocation">Location: {location.name}</div>
    </section>
)