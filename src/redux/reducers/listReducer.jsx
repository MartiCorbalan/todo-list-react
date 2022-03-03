const initalState = {
  
  list: [],
};


const listReducer = (state = initalState, action) => {
  
  console.log("Reducer");
  switch(action.type){

    case "ADD_ITEM":
      return {
        list:[
          ...state.list,
      {id: action.id, title: action.title, completed:false}
        ]
      
      
    };
    case "DELETE_ITEM":
    return {
                                        //si la id es igual a la id hace el filter
       list: (state = state.list.filter((id) => id !== action.id/*  && action.completed */)),  

      };

    case "TODO":
     return {
       
     }
     
    case "DONE":
      return action.payload

    case "DELETE_ALL":
      return {
        ...state,
       list:[]
      }
    default:
      return state
  }
 
  
};

export default listReducer;
