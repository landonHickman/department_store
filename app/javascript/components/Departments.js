import React from 'react' /*used to start js file */

const Departments = (props) => { /* outer layer props from controller passed here*/
  const { departments } = props /*key that was passed in from controller? equalled to props */
  const renderDepartments = () => {  /*method used to render the page */
    return departments.map( department => { /* Map loop to list all department singulars*/
      return(
        <div id="border">
          <h1>{department.name}</h1>
          <a href={`/departments/${department.id}`}><button>View</button></a>
          {/* moved these links into department */}
          {/* unnessasary links user can do the same thing once they get into the department page. */}

          {/* <a href={`/departments/${department.id}/items`}><button>Show Department and Items</button></a>
          <a href={`/departments/${department.id}/edit`}><button>Edit</button></a>
          <a href={`/departments/${department.id}`} data-method="delete"><button>Delete</button></a> */}
        </div>
      )

    })
  }

  return( /*everyting is displayed in this order */
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
      </nav>
      <h1>Departments</h1>
      <a href="/departments/new"><button>New Department</button></a>
      {renderDepartments()} {/* Calls the function from above  */}
    </div>
  )
}

export default Departments /* used to end file */