import { useState } from "react";
import libri from "./array";

const taskList = libri;

const Main = ()=>{  

const [newTask, setNewTask] = useState(taskList);
const [formData, setformData] = useState({   
    "id": "",
    "titolo": "",
    "contenuto": "",
    "categoria": "",
    "immagini": "",
    "tags": [],
    "stato": ""  
})

 const handlerSubmit = (e) => {
    e.preventDefault();
    setNewTask([formData, ...newTask]);
  };

  const updateTask = (e) =>{
    const formData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setformData(formData);
  }
  
  const handlerRemove = (id) =>{
    const removeList = newTask.filter((item) => item.id !== id)
    setNewTask(removeList);
  };

  return (
   <main>
    <div className="container">
      <form action="#" onSubmit={ handlerSubmit }>
        <div className="col-12">
          <div className="input-group mb-3 mt-5">
            <input name="text" type="text" className="form-control" placeholder="Aggiungi nuovo articolo" value={formData.text} onChange={updateTask} />          
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Aggiungi</button>
          </div>
          
            <div className="mb-3">
              <label for="formFileDisabled" className="form-label">Aggiungi immagine</label>
              <input name="immagine" className="form-control" type="file" id="formFileDisabled" disabled />
            </div>          

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Inserire contenuto</label>
            <textarea name="contenuto" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>       
      </form>
       
      <div className="container">
        <div className="col-12">
          {newTask.map((task) => (<li key={task.id}>{task.text} <i className="fa-solid fa-trash" onClick={() => handlerRemove(task.id)}></i></li>))}
            <div className="card">
              <img src="..." class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>            
            </div>

        </div>        
      </div>     
    </div>
      

   </main>
  ) 
 };
 
 export default Main;