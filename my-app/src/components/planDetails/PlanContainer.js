import Plan from './Plan.js';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './../../styles/planDetails/PlanContainer.css'

export default function PlanContainer() {
    const { plan_ID } = useParams();
    const plans = useSelector(state => state.plans.list)
    let plan = plans.find(plan => plan._id === plan_ID);

    return (
        <div className='PlanContainer'>
            <Plan plan={plan}/>
        </div> 
    );
}