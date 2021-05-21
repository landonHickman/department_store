import React from 'react'

const Items = (props) => {
  const { department, items } = props

  const renderItems = () => {
    return items.map( item => {
      return(
      <div id="border">
        <h2>{item.name}</h2>
        <h3>{`$${item.price}`}</h3>
        <a href={`/departments/${department.id}/items/${item.id}`}><button>View</button></a>
        <a href={`/departments/${department.id}/items/${item.id}/edit`}><button>Edit</button></a>
        <a href={`/departments/${department.id}/items/${item.id}`} data-method="delete"><button>Delete</button></a>
      </div>
      )
    })
  }

  return(
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
        <a href={`/departments/${department.id}`}><button>Back</button></a>
      </nav>
      <h1>{department.name}'s Items</h1>
      <a href={`/departments/${department.id}/items/new`}><button>Create a New Item</button></a>
      {renderItems()}
    </div>
  )
}

export default Items