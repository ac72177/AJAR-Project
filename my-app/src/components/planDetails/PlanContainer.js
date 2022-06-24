import Plan from './Plan.js';
import DeletePlanButton from './../planModification/DeletePlanButton'
import { useSelector } from 'react-redux';
import './../../styles/planDetails/PlanContainer.css'

export default function PlanContainer() {
    const plans = useSelector(state => state.plans)
    // TODO this is currently a fixed value, access it with a GET instead
    let plan = plans[plans.length - 1];
    return (
        <div className='PlanContainer'>
            <Plan plan={plan}/>
            <DeletePlanButton id={plan._id} />
        </div> 
    );
}