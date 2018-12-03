import { RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  switch(action.type) {
    // case RECEIVE_TODOS:
    //   return [...state, action.todos];
    // case RECEIVE_TODO:
    //   return [state, action.todo];
    default:
    return state;
  }

};

export default todosReducer;
