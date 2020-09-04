import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { Employee } from "./Employee"
import "./Employee.css"

export const EmployeeList = (props) => {
    const {employees, getEmployees} = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getEmployees()
        getLocations()
    }, [])

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
        <article className="employeeList">
            {
                employees.map(employee => {
                    const location = locations.find(l => l.id === employee.locationId) || {}
                    return <Employee key={employee.id} employee={employee} location={location} />
                })
            }
        </article>
        </div>
    )
}