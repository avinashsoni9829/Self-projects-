import { ADD,SUB } from "./Actions";
const initialState = {
     count : 100
}

const CounterReducer = (state = initialState , action) => {
      switch (action.type){
           case ADD:
            return {
                 ...state ,
                 count : parseFloat(state.count) + parseFloat(action.payload)
            }
            case SUB: return{
                 ...state,
                 count : state.count - action.payload
            }
            default: return state;
      }
}

export default CounterReducer;

