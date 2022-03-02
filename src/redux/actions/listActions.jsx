export const putList = (amount) => {
    return {
      type: "ADD_ITEM", 
      payload: amount,

    };
  };
  




export const deleteItem= (id) => {
    return {
      type: "DELETE_ITEM",
      payload: id,
    };
  };

export const Todo= () => {
    return {
      type: "TODO",
      payload: "todo",
    };
};
export const Done= () => {
    return {
      type: "DONE",
      payload: "done",
    };
  };


export const deleteAllTodos = ()=> {
    return {
      type: "DELETE_ALL",
      
    };
  }