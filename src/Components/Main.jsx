import { useState } from "react";
import libri from "./libri";

const listaLibri = libri;

const categorie = ["Tecnologia", "Viaggi", "Salute", "Letteratura", "Storia", "Arte" ]

const Main = ()=>{  

const [taskList, setTaskList] = useState(listaLibri);
const [formData, setformData] = useState({   
    "id": "",
    "titolo": "",
    "contenuto": "",
    "categoria": "",
    "immagini": "",
    "tags": [],
    "stato": false 
})

 const handlerSubmit = (e) => {
    e.preventDefault();
    setTaskList([{...formData, id: Date.now()}, ...taskList]);
  };

  const updateTask = (e) =>{
    console.log(e.target.name);
    
    let value = e.target.value
    
    if(e.target.name === "categoria"){
      value = categorie[e.target.name]
      // console.log(categorie);
      console.log("valore categoria: " + value);
      
      
      
      
    }
    

    if(e.target.type === "checkbox"){
      value = e.target.checked
    }
    const articleData = {
      ...formData,
      [e.target.name]: value
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
        <div className="col-12 shadow p-2 text-bg-secondary">
         <h1>Aggiungi un post</h1>
          <div className="input-group mb-3 mt-5">
            <input className="form-control"
             name="titolo" 
             type="text" 
             placeholder="Aggiungi il titolo" 
             value={formData.titolo} 
             onChange={updateTask} />             
          </div>
          
            <div className="mb-3">
              <label hmtlfor="formFileDisabled" className="form-label">Aggiungi immagine</label>
              <input name="immagine" className="form-control" type="file" id="formFileDisabled" disabled />
            </div>          

          <div className="mb-3">
            <label hmtlfor="exampleFormControlTextarea1" className="form-label">Inserire contenuto</label>
            <textarea name="contenuto" type="text" value={formData.contenuto} onChange={updateTask} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>  
                   
          <div>
            <select className="form-select" name="categoria" type="text" value={formData.categoria} onChange={updateTask} >
              <option>Seleziona una categoria</option>
              {categorie.map((categoria, index) =>(
                <option key={index} value={index}>{categoria}</option>
              ))}
            </select>
          </div>

          <div className="form-check mt-3">
            <input className="form-check-input" type="checkbox" id="published" name="published" checked={formData.stato} onChange={updateTask}/>
            <label className="form-check-label" htmlFor="published">
              Pubblicato
            </label>
          </div>
         <button className="btn btn-warning" type="submit" id="button-addon2">Aggiungi</button> 
        </div>              
      </form>
       
      <div className="container">
        <div className="col-12">
          {taskList.map((task) => (<div className="card p-2 mt-5 shadow text-bg-success" key={task.id}>
           
              <img src={task.immagini} className="card-img-top mt-2" alt="immagine" />
              <div className="card-body">
                <h2 className="card-title">{task.titolo} <i className="fa-solid fa-trash" onClick={() => handlerRemove(task.id)}></i></h2>
                <p className="card-text">{task.contenuto}</p>
              </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{task.categoria}</li>
                  <li className="list-group-item">{task.tags}</li>
                  <li className="list-group-item">{task.stato}</li>
                </ul>                        
            
            </div>))}

        </div>        
      </div>     
    </div>
      

   </main>
  ) 
 };
 
 export default Main;