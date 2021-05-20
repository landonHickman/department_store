import React from 'react'
const Reviews = (props) => {
  const {reviews, item} = props

  const renderReviews = () => {
    return reviews.map( review => {
      return(
        <div>
          <h3>Review</h3>
          <p>{review.body}</p>
          <a href={`/items/${item.id}/reviews/${review.id}`}>Show Review</a>
          <a href={`/items/${item.id}/reviews/${review.id}/edit`}>Edit</a>
          <a href={`/items/${item.id}/reviews/${review.id}`} data-method="delete" >Delete</a>
        </div>
      )
    })
  }
  return(
    <div>
      <h1>Reviews</h1>
      <h1>{item.name}</h1>
      <a href={`/items/${item.id}/reviews/new`}>Create New</a>
      {renderReviews()}
    </div>
  )
}

export default Reviews