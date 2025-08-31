import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Navbar />
    <Card />
  </div>
);

