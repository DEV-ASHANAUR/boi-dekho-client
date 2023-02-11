import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import Book from "./pages/Book/Book";
import NoPage from "./pages/NoPage/NoPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/books" element={<Books />}></Route>
                <Route path="/book/:id" element={<Book />}></Route>
                <Route path="*" element={<NoPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
