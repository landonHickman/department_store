import React from 'react'

const DepartmentNew = (props) => {
  return(
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
        <a href="/"><button>Back</button></a>
      </nav>
      <h1>Create a New Department</h1>
      <form action="/departments" method="Post">
        <input placeholder="Name" name="department[name]"/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default DepartmentNew