import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AllTodosPage from "./pages/AllTodosPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllTodosPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
