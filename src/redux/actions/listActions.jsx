export const putList = (title) => {
    return {
      type: "ADD_ITEM", 
     
      id: Date.now(),
      title: title
      

    };
  };
  

export const deleteItem= (id) => {
    return {
      type: "DELETE_ITEM",
      id: id,
    };
  };

export const Todo= (id,completed) => {
    return {
      type: "TODO",
      id: id,
      completed: completed
    };
};
export const Done= (id,completed) => {
    return {
      type: "DONE",
      id: id,
      completed: completed
    };
  };


export const deleteAllTodos = ()=> {
    return {
      type: "DELETE_ALL",
      
    };
  }