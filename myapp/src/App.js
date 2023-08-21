import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Project from "./Pages/Project";
// import Background from "./components/Background";
import Navbar from "./components/Navbar";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pages/Project.jsx" element={<Project />} />
        <Route path="/Pages/SignIn.jsx" element={<SignIn />} />
        <Route path="/Pages/SignUp.jsx" element={<SignUp />} />
        <Route path="/Pages/About.jsx" element={<About />} />
        <Route path="/Pages/Contact.jsx" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
