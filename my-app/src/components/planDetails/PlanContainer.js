import Plan from './Plan.js';
import './../../styles/planDetails/PlanContainer.css'

export default function PlanContainer() {
    let data = require('../../dummyData.json');;
    let plan = data.plans[0];
    console.log(plan);
    return (
        <div className='PlanContainer'>
            <Plan plan={plan}/>
        </div> 
    );
}