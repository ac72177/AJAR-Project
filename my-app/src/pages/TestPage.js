import PlanContainer from "./../components/planDetails/PlanContainer"
import Login from "./../components/login/login"
import Signup from "./../components/login/signup"
import "./../styles/login/style.css"
import PlanButton from "../components/planCreation/PlanButton"

export default function TestPage() {
    return (
        <div>
            Optionally Test your Components here
            <br></br>
            <PlanButton />
            <br></br>
            <PlanContainer />
        </div>
    );
}