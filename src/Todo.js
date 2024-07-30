import React, { useState } from 'react'

function Todo() {
    
    const [task, setTask] = useState("");
    const [newTask, setNewTask] = useState([]);
    const handleTask = (e) =>{
     setTask(e.target.value);
   
    }
    const handleNew = () =>{
        setNewTask([...newTask,{task}]);
        console.log(newTask);
    }
    const handleRemove = (i) =>{
        let copydata=[...newTask];
        copydata.splice(i,1);
        setNewTask(copydata);
    }   
    const handleChecked = () =>{
      <del>{newTask}</del>
    }

    let data=newTask.map((i,t) =>{
        if(task.length < null){
            alert("ADD, TO-DO First");
        }
        return  <div className='demo4'>
            <li key={t}>{i.task}</li>
            <input type="checkbox" onChange={handleChecked} /> 
            <button type='button' onClick={handleRemove}> Remove </button>
            </div>
    })
  return (
    <div className='demo'>
      <div className='demo1'>
        <div className='demo2'>TO-DO List</div>
        <label htmlFor="name"> ADD Task </label>
        <input type="text" onChange={handleTask} placeholder='Enter Your Task'/>
        <button type='button' onClick={handleNew} > Add </button>
        <p>{data}</p>
      </div>
    </div>
  )
}
export default Todo
