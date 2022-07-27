import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./navBar/Navbar";
import MyRoutes from "./../pages/MyRoutes";
import "./../styles/App.css";
import LoginButton from "../components/login/LoginButton";
import SignupButton from "../components/login/SignupButton";
import Loading from "./login/Loading";

function App() {
  const { isLoading, isAuthenticated, user } = useAuth0();
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
    return (
      <div>
        <h1>Welcome to Plan+</h1>
        <LoginButton />
        <SignupButton />
      </div>
    );
  }
}

export default App;
