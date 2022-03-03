import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import {
  putList,
  deleteItem,
  deleteAllTodos,
  completedItem,
} from "./redux/actions/listActions";
function App() {
  const list = useSelector((store) => store.listReducer.list);
  const dispatchList = useDispatch();
  const inputRef = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {console.log(list)}
          {list.map((value, index) => {
            return (
              <div className="tareas" key={value.id}>
                <p id="tarea">{value.title}</p>
                &nbsp;&nbsp;
                <p
                /* onClick={() => {
                    if (
                      dispatchList(completedItem((value.completed = "todo")))
                    ) {
                      dispatchList(completedItem((value.completed = "done")));
                    } else {
                      dispatchList(completedItem((value.completed = "todo")));
                    }
                   
                  }} */
                >
                  {value.completed}
                </p>
                &nbsp;&nbsp;
                <input
                  type="checkbox"
                  value={value.completed}
                  checked={value.completed}
                  onChange={() => {
                    if (list[index].completed === "Todo") {
                      dispatchList(completedItem((value.completed = "Done")));
                    } else {
                      dispatchList(completedItem((value.completed = "Todo")));
                    }
                  }}
                />
                {/* <button className='todo btn btn-primary mt-1' onClick={() => dispatchList(Todo(list[index].id))}>{}</button> */}
                <button
                  className="btn btn-danger mt-1 boton_delete"
                  onClick={() => dispatchList(deleteItem(list[index]))}
                >
                  Borrar
                </button>
                &nbsp;
              </div>
            );
          })}
        </div>
        <br />
        <input id="tasca" type="text" ref={inputRef}></input>
        <br />
        <button
          className="btn btn-primary"
          onClick={() => {
            //cogemos el ref del input y lo añadimos a la lista y luego vaciamos el input
            if (inputRef.current.value === "") {
              alert("No pots deixar el camp buit");
            } else {
              dispatchList(putList(inputRef.current.value));
              inputRef.current.value = "";
            }
          }}
        >
          afegir tasca
        </button>
        <br />
        <button
          className="btn btn-primary"
          onClick={() => dispatchList(deleteAllTodos())}
        >
          reset
        </button>
      </header>
    </div>
  );
}

export default App;
