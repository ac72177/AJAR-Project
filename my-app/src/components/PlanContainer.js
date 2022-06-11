import Plan from './Plan.js';
import './PlanContainer.css'

export function PlanContainer() {
    let data = require('../dummyData.json');;
    let plan = data.plans[0];
    console.log(plan);
    return (
        <div className='PlanContainer'>
            <Plan plan={plan}/>
        </div> 
    );
}