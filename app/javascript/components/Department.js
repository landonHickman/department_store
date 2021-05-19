import React from 'react'

const Department = (props) => {
  const{ name, id} = props.department
  return(
    <>
    <div>
      <h1>{`Department #${id}: ${name}`}</h1>
      <a href="/">Back to all Departments</a>
    </div>
    </>
  )
}

export default Department