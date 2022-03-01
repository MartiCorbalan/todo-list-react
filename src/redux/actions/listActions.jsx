export const putList = (amount) => {
    return {
      type: "ADD_ITEM", 
      payload: amount
    };
  };
  
export const resetList = () => {
    return {
      type: "RESET_LIST",
    };
  };