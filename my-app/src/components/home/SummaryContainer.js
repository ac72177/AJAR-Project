import SummaryBar from "./SummaryBar";
import './../../styles/home/SummaryBar.css';

export default function SummaryBarContainer() {
    let data = require('../../dummyData.json');
    let plan = data.plans;
    // console.log(data);

    return (
        <div className='SummaryBarContainer'>
            <SummaryBar plans={plan}/>
        </div>
    );
}