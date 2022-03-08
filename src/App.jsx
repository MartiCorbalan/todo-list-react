import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import {
  putList,
  deleteItem,
  deleteAllTodos,
  completedItem,
  toggleTodo,
} from "./redux/actions/listActions";
function App() {
  const list = useSelector((store) => store.listReducer.list);
  const dispatchList = useDispatch();
  const inputRef = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Llista de tasques
          <br />
          <br />
          {console.log(list)}
          {list.map((value, index) => {
            return (
              <>
                <div className="tareas">
                  <div className="contingut-todo">
                    <p>{value.title}</p>
                    &nbsp;&nbsp;
                    <p>{value.completed}</p>
                    &nbsp;&nbsp;
                    <input
                      type="checkbox"
                      value={value.completed}
                      checked={value.completed === "Todo" ? false : true}
                      onChange={() => {
                        if (list[index].completed === "Todo") {
                          dispatchList(
                            completedItem((value.completed = "Done"))
                          );
                        } else {
                          dispatchList(
                            completedItem((value.completed = "Todo"))
                          );
                        }
                      }}
                    />
                    &nbsp;
                    <button
                      className="btn btn-danger mt-1 boton_delete"
                      onClick={() => dispatchList(deleteItem(list[index]))}
                    >
                      Borrar
                    </button>
                  </div>
                  <div className="date">
                    <h3>
                      Data de creació:{" "}
                      <span className="span">{value.data}</span>
                    </h3>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <br />
        <input type="text" ref={inputRef}></input>
        <input
          type="text"
          placeholder="Search task"
          onChange={(e) => dispatchList(toggleTodo(e.target.value))}
        ></input>

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
