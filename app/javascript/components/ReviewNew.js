import React from 'react'

const ReviewNew = (props) => {
  const {item} = props

  return(
    <div id="border">
      <h1>Please add a Review</h1>
      <form action={`/items/${item.id}/reviews`} method="post">
        <input placeholder="Review" name="review[body]"/>
        <br/>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default ReviewNew