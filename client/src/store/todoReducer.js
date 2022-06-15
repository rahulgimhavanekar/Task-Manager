import { CREATE_TODO, DELETE_TODO } from "../actions/actionTypes";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Get Eggs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt aspernatur suscipit, architecto tempora amet accusantium provident molestiae, vitae reiciendis harum! Alias et molestias amet ducimus praesentium modi exercitationem temporibus cum corrupti nisi voluptas earum explicabo, sit cumque eum necessitatibus non error aliquid officia. Nesciunt optio incidunt nam quo cum maiores quis perspiciatis, eaque, cupiditate itaque excepturi aut, dignissimos consectetur. Quo, laboriosam a quod dolore commodi quidem exercitationem incidunt consectetur dolorem enim velit, doloribus soluta consequatur? Suscipit tempore perspiciatis recusandae.",
    date: "June 10, 2022",
  },
  {
    id: 2,
    title: "Take out Trash",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis optio itaque inventore debitis dolor quod?",
    date: "June 12, 2022",
  },
  {
    id: 3,
    title: "Do Homework",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis optio itaque inventore",
    date: "May 6, 2022",
  },
];

const initialState = {
  todos: DUMMY_DATA,
  totalTodos: 0,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        totalTodos: state.totalTodos + 1,
      };
    case DELETE_TODO:
      const newTodoList = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      return {
        ...state,
        todos: newTodoList,
        totalTodos: state.totalTodos - 1,
      };
    default:
      return state;
  }
};

export default todoReducer;
