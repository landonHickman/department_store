import React from 'react'

const Item = (props) => {
  const {department, item} = props

  return(
    <div>
      <h1>{`${department.name} Department`}</h1>
      <h2>{item.name}</h2>
      <h3>{`$${item.price}`}</h3>
      <a href={`/departments/${department.id}/items`}>Back to Items</a>
    </div>
  )
}

export default Item