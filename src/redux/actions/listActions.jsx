export const putList = (title) => {
  return {
    type: "ADD_ITEM",

    id: Date.now(),
    title: title,
  };
};

export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    id: id,
  };
};

export const completedItem = (id, completed) => {
  console.log("completed =" + completed);
  return {
    type: "COMPLETED_ITEM",
    id: id,
    completed: completed,
  };
};

export const deleteAllTodos = () => {
  return {
    type: "DELETE_ALL",
  };
};
