import * as ACTIONS from "../actions/actionTypes";

export default function todoReducer(state = {}, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
        console.log(state);
            return{
                ...state,
                events:state.events.concat(action.payload)
            }
        default:
            return state;
    }
};
