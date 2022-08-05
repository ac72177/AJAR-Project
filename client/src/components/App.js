import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./navBar/Navbar";
import MyRoutes from "./../pages/MyRoutes";
import "./../styles/App.css";
import Loading from "./login/Loading";
import LandingView from "../pages/LandingView";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return (
      <div className="layout">
        <Navbar />
        <div className="page">
          <MyRoutes />
        </div>
      </div>
    );
  } else {
    return <LandingView />;
  }
}

export default App;
