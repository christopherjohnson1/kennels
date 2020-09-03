import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
        console.log(" **** Locations before state pulled from API ****")
        getEmployees()
    }, [])

    useEffect(() => {
        console.log(" **** Locations after state pulled from API ****")
    }, [employees])

    return (
        <article className="employees">
            {
                employees.map(employee => {
                    return <section key={employee.id} className="employee">
                        <div><h3>{ employee.name }</h3></div>
                        <div>Position: { employee.position }</div>
                    </section>
                })
            }
        </article>
    )
}