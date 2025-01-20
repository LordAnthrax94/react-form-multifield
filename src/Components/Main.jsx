import { useState } from "react";

const taskList = [];

const Main = ()=>{  

const [newTask, setNewTask] = useState(taskList);
const [addTask, setAddTask] = useState({ text: "" })

 const handlerSubmit = (e) => {
    e.preventDefault();
    setNewTask([addTask, ...newTask]);
  };

  const updateTask = (e) =>{
    const addTask = {
      id: Date.now(),
      text: e.target.value
    };
    setAddTask(addTask);
  }
  
  const handlerRemove = (id) =>{
    const removeList = newTask.filter((item) => item.id !== id)
    setNewTask(removeList);
  };

  return (
   <main>
    <div className="container">
      <form action="#" onSubmit={ handlerSubmit }>
        <div className="input-group mb-3 mt-5">
          <input type="text" className="form-control" placeholder="Inserire la nuova Task" value={addTask.text} onChange={updateTask} />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Aggiungi</button>
        </div>
      </form> 
      <div className="container">
        <ul className="list-group">
          {newTask.map((task) => (<li key={task.id}>{task.text} <i className="fa-solid fa-trash" onClick={() => handlerRemove(task.id)}></i></li>))}
                  
        </ul>
      </div>     
    </div>
      

   </main>
  ) 
 };
 
 export default Main;