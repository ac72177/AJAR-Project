import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./navBar/Navbar";
import MyRoutes from "./../pages/MyRoutes";
import "./../styles/App.css";
import Loading from "./login/Loading";
import LandingView from "../pages/LandingView";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NameForm from "../pages/NameForm";
import { useEffect } from "react";
import { getUserAsync } from "../redux/users/thunks";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#373c42",
      darker: "#232629",
    },
    neutral: {
      main: "#64748B",
    },
    logout: {
      main: "#d9e5d9",
      contrastText: "#fff",
    },
  },
});

function App() {
  const { isLoading, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated && user) {
    useEffect(() => {
      dispatch(getUserAsync(user.sub));
    }, []);
    let usersState = useSelector((state) => state.users.list);
    let returnedUser = usersState[0];

    if (returnedUser === undefined) {
      return <NameForm />;
    } else {
      return (
        <div className="layout">
          <ThemeProvider theme={theme}>
            <Navbar />
          </ThemeProvider>
          <div className="page">
            <MyRoutes />
          </div>
        </div>
      );
    }
  } else {
    return (
      <ThemeProvider theme={theme}>
        <LandingView />;
      </ThemeProvider>
    );
  }
}

export default App;
