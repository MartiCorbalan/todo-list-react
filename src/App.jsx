import './App.css';
import {useDispatch, useSelector } from "react-redux"
import { useRef } from 'react';
import {putList, resetList} from "./redux/actions/listActions"
function App() {
  const list = useSelector((store) => store.listReducer.list);
  const dispatchList = useDispatch()
  const inputRef = useRef()

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          {list.map((value, index)=>{
            return(
              <>
              <div className='tareas'>
                <p>{value}</p>
                <button className='botondelete btn btn-primary '>delete</button>
              </div>
              </>
            )
          })}
        </div>
      <input id='tasca' type="text" value={list.amount}></input>
      <br />
      <button className='btn btn-primary' onClick={() => dispatchList(putList(document.getElementById("tasca").value))}>afegir tasca</button>
      
      </header>
    </div>
   
  );
}

export default App;
