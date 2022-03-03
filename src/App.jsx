import './App.css';
import {useDispatch, useSelector } from "react-redux"
import { useRef } from 'react';
import {putList, deleteItem, deleteAllTodos, completedItem} from "./redux/actions/listActions"
function App() {
  const list = useSelector((store) => store.listReducer.list);
  const dispatchList = useDispatch()
  const inputRef = useRef();

  
  

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          {console.log(list)}
          {list.map((value, index)=>{
            return(
              
              <div className='tareas' key={value.id}>
                <p id='tarea'>{value.title}</p>
                <input type="checkbox" checked={value.completed} onChange={()=> dispatchList(completedItem(value.id))}/>
                {/* <button className='todo btn btn-primary mt-1' onClick={() => dispatchList(Todo(list[index].id))}>{}</button> */}
                <button className='botondelete btn btn-danger' onClick={() => dispatchList(deleteItem(list[index]))}>delete</button>
              </div>
              
            )
          })}
        </div>
      <input id='tasca' type="text" value={list.amount}></input>
      <br />
      <button
          className="btn btn-primary"
          onClick={() => {
            if (document.getElementById("tasca").value !== "") {
              dispatchList(putList(document.getElementById("tasca").value));
            } else {
              alert("No pots deixar el camp buit");
            }
          }}
        >
          afegir tasca
        </button>
      <br />
      <button className='btn btn-primary' onClick={() => dispatchList(deleteAllTodos())}>reset</button>
    </header>
    </div>
   
  );
}

export default App;
