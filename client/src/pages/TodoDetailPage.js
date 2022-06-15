import React from "react";
import { useParams } from "react-router-dom";
import HighlightedTodo from "../components/Todos/HighlightedTodo";

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

const TodoDetailPage = () => {
  const params = useParams();

  const todo = DUMMY_DATA.find((item) => {
    return item.id === params.id;
  });

  return (
    <HighlightedTodo
      title={todo.title}
      date={todo.date}
      description={todo.description}
    />
  );
};

export default TodoDetailPage;
