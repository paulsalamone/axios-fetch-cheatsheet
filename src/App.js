import "./styles.css";
import Navbar from "./components/Navbar";
import Content from "./Content";
import { Route, Routes } from "react-router-dom";
import LiveCode from "./LiveCode";

export default function App() {
  return (
    <div className="App">
      <h1>How to API Fetch in React with Axios </h1>

      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/code" element={<LiveCode />} />
      </Routes>
    </div>
  );
}
