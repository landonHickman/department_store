import React from 'react'

const Items = (props) => {

  const { department, items } = props

  const renderItems = () => {
    return items.map( item => {
      return(
      <div>
        <h2>{item.name}</h2>
        <h3>{`$${item.price}`}</h3>
        <a href={`/departments/${department.id}/items/${item.id}`}>Show</a>
        <a href={`/departments/${department.id}/items/${item.id}/edit`}>Edit</a>
        <a href={`/departments/${department.id}/items/${item.id}`} data-method="delete">Delete</a>
      </div>
      )
    })
  }

  return(
    <div>
      <h1>{department.name}</h1>
      {renderItems()}
    </div>
  )
}

export default Items