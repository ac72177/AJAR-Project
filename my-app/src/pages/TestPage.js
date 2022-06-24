import PlanContainer from "./../components/planDetails/PlanContainer"
import Login from "./../components/login/Login"
import Signup from "./../components/login/Signup"
import "./../styles/login/style.css"
import CreatePlanButton from "../components/planModification/CreatePlanButton"

export default function TestPage() {
    return (
        <div>
            Optionally Test your Components here
            <br></br>
            <CreatePlanButton />
            <br></br>
            <PlanContainer />
        </div>
    );
}