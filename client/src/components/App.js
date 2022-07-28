import Navbar from "./navBar/Navbar";
import MyRoutes from "./../pages/MyRoutes";
import "./../styles/App.css";

function App() {
  return (
    <div className="layout">
      <Navbar />
      <div className="page">
        <MyRoutes />
      </div>
    </div>
  );
}

export default App;
