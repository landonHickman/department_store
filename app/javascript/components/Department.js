import React from 'react'

const Department = (props) => {
  // name and id passed from department that was passed from the controller
  const{ name, id} = props.department 
  return(
    // fragment jsx used so that we can have sibling tags not in use here
    <> 
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a> {/*home button and back button do the same thing*/}
        <a href="/"><button>Back</button></a>
      </nav>
      <h1>{`Department ${name}`}</h1> 
      {/*links to view items and edit dep and delete dep */}
      <a href={`/departments/${id}/items`}><button>View Items</button></a>
      <a href={`/departments/${id}/edit`}><button>Edit</button></a>
      <a href={`/departments/${id}`} data-method="delete"><button>Delete</button></a>
      <div>
        <h1></h1>
        
      </div>
    </div>
    </>
  )
}

export default Department