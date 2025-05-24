import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Index.css";
import { ToastContainer, toast } from "react-toastify";
import Wrapper from "./context/Wrapper.jsx";

createRoot(document.getElementById("root")).render(
  <Wrapper>
    <App />
    <ToastContainer position="top-right" />
  </Wrapper>
);
