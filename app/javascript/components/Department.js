import React from 'react'

const Department = (props) => {
  const{ name, id} = props.department
  return(
    <>
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
      </nav>
      <h1>{`Department ${name}`}</h1>
      <a href={`/departments/${id}/edit`}><button>Edit</button></a>
      <a href={`/departments/${id}`} data-method="delete"><button>Delete</button></a>
      <div>
        <h1></h1>
        <a href="/"><button>Back to all Departments</button></a>
      </div>
    </div>
    </>
  )
}

export default Department