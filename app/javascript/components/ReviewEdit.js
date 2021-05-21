import React from 'react'

const ReviewEdit = (props) => {
  const {item, review} = props
  return(
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
        <a href={`/items/${item.id}/reviews/${review.id}`}><button>Back</button></a>
      </nav>
      <h1>Edit your Review</h1>
      <form action={`/items/${item.id}/reviews/${review.id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
        <textarea defaultValue={review.body} placeholder="Review" name="review[body]"/>
        <br/>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default ReviewEdit