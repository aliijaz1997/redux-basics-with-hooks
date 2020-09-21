




export const Reducercount = (state = {counter:0}, action) => {
   switch (action.type) {
       case "INCREMENT" : {
          return {...state, counter: state.counter + 1}
       }
       case "DECREMENT" : {
           return {...state, counter: state.counter + 1}
       }
       case "FORM" : {
           return {...state, counter: state.counter + action.payload}
       }
       default : {
           return state;
       }
   }
}

