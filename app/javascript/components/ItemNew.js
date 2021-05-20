import React from 'react'

const ItemNew = (props) => {

  const {department, item} = props
  // const {name, price} = item
  // const defaultName = name ? name : ""
  // const defaultPrice = price ? price : ""
  return(
    <div>
      <h1>Create New Item</h1>
      <form action={`/departments/${department.id}/items`} method="post">
      <p>Name</p>
      <input /*defaultValue={defaultName}*/placeholder="name" name="item[name]" type="text"/>
      <p>Price</p>
      <input /*you defaultValue={defaultPrice}*/placeholder="00.00" name="item[price]" type="float"/>
      <br />
      <button type="submit">add</button>
      </form>
    </div>
  )
}

export default ItemNew