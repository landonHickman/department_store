import React from 'react'

const ItemNew = (props) => {

  const {department, item} = props
  // not sure why this was used in the neo notes it hasn't been shown in class.
  // const {name, price} = item
  // const defaultName = name ? name : ""
  // const defaultPrice = price ? price : ""
  return(
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
        <a href={`/departments/${department.id}/items`}><button>Back</button></a>
      </nav>
      <h1>Create New Item</h1>
      <form action={`/departments/${department.id}/items`} method="post">
      <p>Name</p>
      <input /*defaultValue={defaultName}*/placeholder="name" name="item[name]" type="text"/>
      <p>Price</p>
      <input /*you defaultValue={defaultPrice}*/placeholder="00.00" name="item[price]" type="float"/>
      <br />
      <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ItemNew