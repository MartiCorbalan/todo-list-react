const initalState = {
  list: [],
};

const listReducer = (state = initalState, action) => {
  console.log("Reducer");
  return {
    ...state,
    list:[...state.list, action.payload]
  }
};

export default listReducer;
