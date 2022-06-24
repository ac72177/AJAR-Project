import Plan from './Plan.js';
import DeletePlanButton from './../planModification/DeletePlanButton'
import { useSelector } from 'react-redux';
import './../../styles/planDetails/PlanContainer.css'

export default function PlanContainer() {
    const plans = useSelector(state => state.plans)
    let plan = plans[plans.length - 1];
    console.log(plan);
    return (
        <div className='PlanContainer'>
            <Plan plan={plan}/>
            <DeletePlanButton id={plan._id} />
        </div> 
    );
}