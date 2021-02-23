import { createStore } from "redux";
// import rootReducer from "./reducers";

const initialState = {
    text2: 'initial state text'
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state
    }
}

export default createStore(rootReducer);