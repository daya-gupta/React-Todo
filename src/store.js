// import { createStore } from 'redux';

// const reducerInitialState = {
//     list: [
//         { todo: 'shopping', completed: false },
//         { todo: 'cooking', completed: false }
//     ]
// }

// function fn_reducer(state=reducerInitialState, action) {
//     switch(action.type) {
//         case 'UPDATE_LIST': {
//             const newState = { ...state, list: [...action.data] };
//             return newState;
//         }
//         default: return state;
//     }
// }

// const store = createStore(
//     fn_reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;