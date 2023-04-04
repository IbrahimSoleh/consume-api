import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetails from "./pages/MainBook";
import EditBookPage from "./pages/AddBook";
import Homepage from "./pages/HomePage";
import NewBookPage from "./pages/NewBooks";
import Register from "./pages/Register";
import Nav from "./pages/index"

function App() {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/newbook"} element={<NewBookPage />} />
          <Route path={"/books/:id"} element={<BookDetails />} />
          <Route path={"/editbook/:id"} element={<EditBookPage />} />
        </Routes>
      </Router>
  );
}

export default App;
