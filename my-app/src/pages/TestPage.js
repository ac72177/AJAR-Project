import PlanContainer from "./../components/planDetails/PlanContainer"
import Login from "./../components/login/login"
import Signup from "./../components/login/signup"
import Form from "./../components/planCreation/Form"
import "./../styles/login/style.css"

export default function TestPage() {
    return (
        <div>
            Optionally Test your Components here
            <Form />
            <PlanContainer />
            
            <Signup />
            
            <Login />
        </div>
    );
}