import * as ACTIONS from "../actions/actionTypes";

export default function todoReducer(state = {}, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:        
            return{
                ...state,
                events:state.events.concat(action.payload)
            }
        case ACTIONS.GET_TODO:
            return{
                ...state,
                events:action.payload
            }
        default:
            return state;
    }
};