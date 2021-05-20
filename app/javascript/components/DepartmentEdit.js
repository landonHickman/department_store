import React from 'react'

const DepartmentEdit = (props) => {
  const {name, id} = props.department 
  return(
    <div id="border">
      <h1>Edit Department</h1>
      <form action={`/departments/${id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
        <input defaultValue={name} placeholder={`${name}`} name="department[name]"/>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default DepartmentEdit