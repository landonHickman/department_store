import React from 'react'

const DepartmentEdit = (props) => {
  const {name, id} = props.department 
  return(
    <div id="border">
      <nav>
        <a href="/"><button>Home</button></a>
        <a href={`/departments/${id}`}><button>Back</button></a>
        
      </nav>
      <h1>Edit Department</h1>
      {/* post is used to "post" the new item.
      it is used in the routing. we have to edit it to be a patch for an edit.*/}
      <form action={`/departments/${id}`} method="post"> 
        <input type="hidden" name="_method" value="patch"/> 
        <textarea defaultValue={name} placeholder={`${name}`} name="department[name]"/>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default DepartmentEdit