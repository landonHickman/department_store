import React from 'react'

const ItemEdit = (props) => {
  const {item, department} = props
  const {name, price} = item
  return(
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
        <a href={`/departments/${department.id}/items`}><button>Back</button></a>
      </nav>
      <h1>ItemEdit</h1>
      <form action={`/departments/${department.id}/items/${item.id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
      <p>Name</p>
      <input defaultValue={name} placeholder="name" name="item[name]" type="text"/>
      <p>Price</p>
      <textarea you defaultValue={price} placeholder="00.00" name="item[price]" type="float"/>
      <br />
      <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default ItemEdit