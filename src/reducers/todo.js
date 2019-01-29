const initialState = {
  todos: [],
};

let todoId = 0;

export default function todo(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          { id: todoId++, content: action.content },
        ],
      });
    case 'CLEAR_TODOS':
      todoId = 0;
      return initialState;
    default:
      return state;
  }
}
