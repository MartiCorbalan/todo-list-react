const initalState = {
  // Compruebo si hay items y si es así los cojo del LocalStorage, sino, devuelvo vacio el array
  list: window.localStorage.getItem("items")
    ? JSON.parse(window.localStorage.getItem("items"))
    : [],
};

const listReducer = (state = initalState, action) => {
  console.log("Reducer");

  switch (action.type) {
    case "ADD_ITEM":
      // Añado todo lo que tenga el state al localStorage y añado el último item
      window.localStorage.setItem(
        "items",
        JSON.stringify([
          ...state.list,
          { id: action.id, title: action.title, completed: "Todo" },
        ])
      );
      return {
        list: [
          ...state.list,
          /* { id: action.id, title: action.title, completed: false }, */
          { id: action.id, title: action.title, completed: "Todo" },
        ],
      };

    case "TOGGLE_TODO":
      console.log(action.title)
      if (action.title === "") {
        return {
          list: JSON.parse(window.localStorage.getItem("items")),
        };
      } else {
    //filtramos la lista por cada objeto/item, si el item se incluye con el titulo que le pasas es igual, devuelve la lista con lo que tenga
        return {  
          list:state.list.filter(
            (title) => title.title.toLowerCase().includes(action.title.toLowerCase()) 
          ),
        }
    };
    case "DELETE_ITEM":
      window.localStorage.setItem(
        "items",
        JSON.stringify((state.list.filter(
            (id) => id !== action.id 
          )),
        )
      );
      return {
        //si la id es igual a la id hace el filter
        list: (state = state.list.filter(
          (id) => id !== action.id /*  && action.completed */
        )),
      };
    case "COMPLETED_ITEM":
      return {
        list: state.list.map((item) =>
          //si el id del item es igual al que le pasamos, li passem el completat
          item.id === action.id ? { ...item, completed: !item.completed } : item
        ),
      };
    case "DELETE_ALL":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default listReducer;
