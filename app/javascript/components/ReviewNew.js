import React from 'react'

const ReviewNew = (props) => {
  const {item} = props

  return(
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
        <a href={`/items/${item.id}/reviews/`}><button>Back</button></a>
      </nav>
      <h1>Please add a Review</h1>
      <form action={`/items/${item.id}/reviews`} method="post">
        <textarea placeholder="Review" name="review[body]"/>
        <br/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ReviewNew