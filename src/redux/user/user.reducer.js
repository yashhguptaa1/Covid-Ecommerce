const INITIAL_STATE = {
    currentUser: null
  };
  

  //Each reducer gets all the possible actions in our App
  //thats why we must return something in case of default means no action matches 
  //for current reducer
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;