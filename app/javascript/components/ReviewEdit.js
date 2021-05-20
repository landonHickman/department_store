import React from 'react'

const ReviewEdit = (props) => {
  const {item, review} = props
  return(
    <div>
      <h1>Edit your Review</h1>
      <form action={`/items/${item.id}/reviews/${review.id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
        <input defaultValue={review.body} placeholder="Review" name="review[body]"/>
        <br/>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default ReviewEdit