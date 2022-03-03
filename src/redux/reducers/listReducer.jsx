const initalState = {
  list: [],
};

const listReducer = (state = initalState, action) => {
  console.log("Reducer");

  switch (action.type) {
    case "ADD_ITEM":
      return {
        list: [
          ...state.list,
          /* { id: action.id, title: action.title, completed: false }, */
          { id: action.id, title: action.title, completed: "Todo" },
        ],
      };
    case "DELETE_ITEM":
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
