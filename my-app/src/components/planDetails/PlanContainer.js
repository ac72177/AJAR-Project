import Plan from './Plan.js';

export default function PlanContainer() {
    let data = require('../../dummyData.json');;
    let plan = data.plans[0];
    console.log(plan);
    return (
        <div>
            <Plan plan={plan}/>
        </div> 
    );
}