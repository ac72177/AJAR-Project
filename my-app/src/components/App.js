import Navbar from './navBar/Navbar'
import MyRoutes from "./../pages/MyRoutes";
import "./../styles/App.css"
import LandingPage from "./auth/LandingPage";

function App() {
  return (
    <div className="layout">
        <LandingPage />
        <Navbar />
      <div className="page">
        <MyRoutes />
      </div>
    </div>
  )
}

export default App;
