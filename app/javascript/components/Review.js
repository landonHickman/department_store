import React from 'react'

const Review = (props) => {
  const {item, review} = props
  return(
    <div>
      <h1>{`${item.name} Review`}</h1>
      <a href={`/items/${item.id}/reviews/`}>Back to Reviews</a>
      <p>{review.body}</p>
      <a href={`/items/${item.id}/reviews/${review.id}/edit`}>Edit</a>
      <a href={`/items/${item.id}/reviews/${review.id}`} data-method="delete" >Delete</a>
    </div>
  )
}

export default Review