import { useState } from "react";
import libri from "./libri";

const listaLibri = libri;

const Main = ()=>{  

const [taskList, setTaskList] = useState(listaLibri);
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
    setTaskList([{...formData, id: Date.now()}, ...taskList]);
  };

  const updateTask = (e) =>{
    const articleData = {
      ...formData,
      [e.target.name]: e.target.value
    };

    setformData(articleData);
  }
  
  const handlerRemove = (id) =>{
    const removeList = taskList.filter((item) => item.id !== id)
    setTaskList(removeList);
  };

  return (
   <main>
    <div className="container">
      <form action="#" onSubmit={handlerSubmit}>
        <div className="col-12">
          <div className="input-group mb-3 mt-5">
            <input name="titolo" type="text" className="form-control" placeholder="Aggiungi nuovo articolo" value={formData.text} onChange={updateTask} />          
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Aggiungi</button>
          </div>
          
            <div className="mb-3">
              <label hmtlfor="formFileDisabled" className="form-label">Aggiungi immagine</label>
              <input name="immagine" className="form-control" type="file" id="formFileDisabled" disabled />
            </div>          

          <div className="mb-3">
            <label hmtlfor="exampleFormControlTextarea1" className="form-label">Inserire contenuto</label>
            <textarea name="contenuto" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>       
      </form>
       
      <div className="container">
        <div className="col-12">
          {taskList.map((task) => (<div className="card mt-5" key={task.id}>{task.titolo} <i className="fa-solid fa-trash" onClick={() => handlerRemove(task.id)}></i>
           
              <img src={task.immagini} className="card-img-top" alt="immagine" />
              <div className="card-body">
                <h5 className="card-title">{task.titolo}</h5>
                <p className="card-text">{task.contenuto}</p>
              </div>                        
            
            </div>))}

        </div>        
      </div>     
    </div>
      

   </main>
  ) 
 };
 
 export default Main;