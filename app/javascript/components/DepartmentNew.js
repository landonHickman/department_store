import React from 'react'

const DepartmentNew = (props) => {
  return(
    <div id="border">
      <h1>Create a New Department</h1>
      <form action="/departments" method="Post">
        <input placeholder="Name" name="department[name]"/>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default DepartmentNew