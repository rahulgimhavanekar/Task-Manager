import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AllTodosPage from "./pages/AllTodosPage";
import AddTodoPage from "./pages/AddTodoPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllTodosPage />} />
        <Route path="/new-todo" element={<AddTodoPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
