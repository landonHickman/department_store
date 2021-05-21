import React from 'react'

const DepartmentNew = (props) => {
  return(
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
        <a href="/"><button>Back</button></a>
      </nav>
      <h1>Create a New Department</h1>
      {/* use the post so the routes know that we are creating a new item */}
      <form action="/departments" method="Post">
        {/* name=model name[key] i think its called a key... */}
        <input placeholder="Name" name="department[name]"/> 
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default DepartmentNew