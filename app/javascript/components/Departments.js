import React from 'react'

const Departments = (props) => {
  const { departments } = props
  const renderDepartments = () => {
    return departments.map( department => {
      return(
        <div>
          <h1>{department.name}</h1>
        </div>
      )

    })
  }

  return(
    <div>
      <h1>Departments</h1>
      <a href="/departments/new">New Department</a>
      {renderDepartments()}
    </div>
  )
}

export default Departments