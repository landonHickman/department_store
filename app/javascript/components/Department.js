import React from 'react'

const Department = (props) => {
  const{ name, id} = props.department
  return(
    <>
    <div>
      <h1>{`Department #${id}: ${name}`}</h1>
      <a href={`/departments/${id}/edit`}>Edit</a>
      <a href={`/departments/${id}`} data-method="delete">Delete</a>
      <a href="/">Back to all Departments</a>
    </div>
    </>
  )
}

export default Department