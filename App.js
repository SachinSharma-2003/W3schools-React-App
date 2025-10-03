import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tutorials from "./components/Tutorials";

// Pages
import Exercises from "./components/Exercises";
import Services from "./components/Services";
import Certificates from "./components/Certificates";
import Html from "./components/Html";
import Css from "./components/Css";
import JAVASCRIPT from "./components/JAVASCRIPT";
import PYTHON from "./components/PYTHON";
import SQL from "./components/SQL";
import Git from "./components/Git";
import Dsa from "./components/Dsa";
import Jquery from "./components/Jquery";
import Excel from "./components/Excel";
import Bootstrap from "./components/Bootstrap";
import ReactComponent from "./components/ReactComponent";
import Php from "./components/Php";
import Java from "./components/Java";
import Genai from "./components/Genai";
import Mongodb from "./components/Mongodb";
import R from "./components/R";
import Ai from "./components/Ai";
import Typescript from "./components/Typescript";

const tutorialRoutes = [
  { path: "/html", element: <Html /> },
  { path: "/css", element: <Css /> },
  { path: "/javascript", element: <JAVASCRIPT /> },
  { path: "/python", element: <PYTHON /> },
  { path: "/sql", element: <SQL /> },
  { path: "/java", element: <Java /> },
  { path: "/php", element: <Php /> },
  { path: "/react", element: <ReactComponent /> },
  { path: "/bootstrap", element: <Bootstrap /> },
  { path: "/excel", element: <Excel /> },
  { path: "/jquery", element: <Jquery /> },
  { path: "/dsa", element: <Dsa /> },
  { path: "/git", element: <Git /> },
  { path: "/mongodb", element: <Mongodb /> },
  { path: "/ai", element: <Ai /> },
  { path: "/genai", element: <Genai /> },
  { path: "/r", element: <R /> },
  { path: "/typescript", element: <Typescript /> },
];

const App = () => {
  return (
    <BrowserRouter>
      <Tutorials />
      <Routes>
        <Route path="/" element={<h2 id="text">Welcome to W3School Clone 🚀</h2>} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/services" element={<Services />} />
        {tutorialRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
