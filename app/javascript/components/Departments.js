import React from 'react'

const Departments = (props) => {
  const { departments } = props
  const renderDepartments = () => {
    return departments.map( department => {
      return(
        <div id="border">
          <h1>{department.name}</h1>
          <a href={`/departments/${department.id}`}><button>Show</button></a>
          <a href={`/departments/${department.id}/items`}><button>Show Department and Items</button></a>
          <a href={`/departments/${department.id}/edit`}><button>Edit</button></a>
          <a href={`/departments/${department.id}`} data-method="delete"><button>Delete</button></a>
        </div>
      )

    })
  }

  return(
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
      </nav>
      <h1>Departments</h1>
      <a href="/departments/new"><button>New Department</button></a>
      {renderDepartments()}
    </div>
  )
}

export default Departments