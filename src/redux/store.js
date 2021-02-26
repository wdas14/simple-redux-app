import { createStore } from "redux";
// import rootReducer from "./reducers";

const initialState = {
    text2: 'initial state text'
}

function rootReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_TEXT':
        return {
            ...state,
            text2: 'UPDATED TEXT'
        }
      default:
        return state
    }
}

export default createStore(rootReducer);