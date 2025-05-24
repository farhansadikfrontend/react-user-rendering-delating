import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Index.css";
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer position="top-right" />
  </>
);
