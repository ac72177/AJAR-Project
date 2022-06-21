import "./../styles/overview/Overview.css";
import Filter from "../components/overview/Filter";
import MiniPlanCard from "../components/overview/MiniPlanCard";
import Sort from "../components/overview/Sort";
import PlanButton from '../components/planCreation/PlanButton'

function Overview(props) {

    const cards = [];
    // const userPlans = props.data.plans;
    // for (let i = 0; i < userPlans.length; i++) {
    //     cards.push(<MiniPlanCard key={i.toString()} id={i} data={props.data} />);
    // }
    return (
        <div className="Overview">
            I am broken please fix (Overview)
            {/* <div className="section options-container">
                <div className="option new-plan-button">
                    <PlanButton />
                </div>
                <div className="option sort-button">
                    <Sort />
                </div>

                <div className="option filter-button">
                    <Filter />
                </div>
            </div>

            <div className="section grid-container">{cards}</div> */}
        </div>
    );
}

export default Overview;
