import React from 'react'
const Reviews = (props) => {
  const {reviews, item, department} = props

  const renderReviews = () => {
    return reviews.map( review => {
      return(
        <div id="border">
          <h3>Review</h3>
          <p>{review.body}</p>
          <a href={`/items/${item.id}/reviews/${review.id}`}><button>Show Review</button></a>
          <a href={`/items/${item.id}/reviews/${review.id}/edit`}><button>Edit</button></a>
          <a href={`/items/${item.id}/reviews/${review.id}`} data-method="delete" ><button>Delete</button></a>
        </div>
      )
    })
  }
  return(
    <div id="border">
      <h1>Reviews</h1>
      <h1>{item.name}</h1>
      <a href={`/items/${item.id}/reviews/new`}><button>Create New</button></a>
      <a href={`/departments/${item.department_id}/items/${item.id}`}><button>Back to Item</button></a>
      {renderReviews()}
    </div>
  )
}

export default Reviews