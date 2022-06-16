import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AllTodosPage from "./pages/AllTodosPage";
import AddTodoPage from "./pages/AddTodoPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import TodoEdit from "./components/Todos/TodoEdit";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllTodosPage />} />
        <Route path="/new-todo" element={<AddTodoPage />} />
        <Route path="/todos/:id" element={<TodoDetailPage />} />
        <Route path="/todos/:id/edit" element={<TodoEdit />} />
      </Routes>
    </Layout>
  );
}

export default App;
