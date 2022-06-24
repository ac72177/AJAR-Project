import "./../styles/overview/Overview.css";
import Filter from "../components/overview/Filter";
import MiniPlanCard from "../components/overview/MiniPlanCard";
import Sort from "../components/overview/Sort";
import CreatePlanButton from '../components/planModification/CreatePlanButton'
import { useSelector } from 'react-redux';

function Overview(props) {
    const userPlans = useSelector(state => state.plans)
    const cards = [];
    for (let i = 0; i < userPlans.length; i++) {
        // might be able to use userPlans[i]._id for id? 
        cards.push(<MiniPlanCard key={i.toString()} id={i} data={props.data} />);
    }
    return (
        <div className="Overview">
            <div className="section options-container">
                <div className="option new-plan-button">
                    <CreatePlanButton />
                </div>
                <div className="option sort-button">
                    <Sort />
                </div>

                <div className="option filter-button">
                    <Filter />
                </div>
            </div>

            <div className="section grid-container">{cards}</div>
        </div>
    );
}

export default Overview;
