// 초기 상태값
const initialState = {
  todos: [],
  // detail: undefined,
};

// 리듀서
const todos = (state = initialState, action) => {
  //console.log(action); // 여기에 console.log(action) 추가
  switch (action.type) {
    case "ADD":
      return { todos: [...state.todos, action.payload] };
    case "REMOVE":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "COMPLETE":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    // case "FIND_DETAIL":
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     detail: state.todos.find(
    //       (details) => details.id === parseInt(action.payload)
    //     ),
    //   };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
