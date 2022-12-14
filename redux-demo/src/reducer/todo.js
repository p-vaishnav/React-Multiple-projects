import {ADD_TODO, REMOVE_TODO} from '../action/action-types';

// initial state of the application can be created in new file as well
const initialState = [];

// brain part of the application
export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        
        case REMOVE_TODO:
            return state.filter(todo =>  todo.id !== action.payload);
        
        default:
            return state;
    }
}

