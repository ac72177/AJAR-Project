import PlanContainer from "./../components/planDetails/PlanContainer"
import Login from "../components/login/Login"
import Signup from "../components/login/Signup"
import "./../styles/login/style.css"

export default function TestPage() {
    return (
        <div>
            Optionally Test your Components here
            
            <PlanContainer />
            
            <Signup />
            
            <Login />
        </div>
    );
}