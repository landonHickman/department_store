import React from 'react'

const Item = (props) => {
  const {department, item} = props

  return(
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
      </nav>
      <h1>{`${department.name} Department`}</h1>
      <h2>{item.name}</h2>
      <h3>{`$${item.price}`}</h3>
      <a href={`/items/${item.id}/reviews`}><button>View Reviews</button></a>
      <a href={`/departments/${department.id}/items`}><button>Back to Items</button></a>
    </div>
  )
}

export default Item