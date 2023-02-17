import React, { useState } from 'react' //use Sstate is use to change the state of the components dynamically
//"State" refers to an object that contains data and information about the current state of a component. It's used to store and manage dynamic data that can change over time.
const Addtodo = ({addTodo}) => {
    const[title, setTitle] = useState("");
    const[Desc, setDesc] = useState("");


    let submit=(e)=>{
        e.preventDefault(); //e == event 
        if(!title || !Desc){
            alert("Title or Description cannot be blank");
        }
       else{
        addTodo(title, Desc);
        setTitle(""); //user does not add blank todo
        setDesc("")} 

    }
  return (
    <div className='container my-3'>   
    <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Desc" className="form-label">Todo Description</label>
    <input type="text"value={Desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Submit</button>
</form>
    </div>
  )
}

export default Addtodo
