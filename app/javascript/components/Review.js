import React from 'react'

const Review = (props) => {
  const {item, review} = props
  return(
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
        <a href={`/items/${item.id}/reviews/`}><button>Back</button></a>
      </nav>
      <h1>{`${item.name} Review`}</h1>
      <p>{review.body}</p>
      <a href={`/items/${item.id}/reviews/${review.id}/edit`}><button>Edit</button></a>
      <a href={`/items/${item.id}/reviews/${review.id}`} data-method="delete" ><button>Delete</button></a>
    </div>
  )
}

export default Review