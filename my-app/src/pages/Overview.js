import "./../styles/overview/Overview.css";
import Filter from "../components/overview/Filter";
import { useState } from 'react'
import MiniPlanCard from "../components/overview/MiniPlanCard";
import Sort from "../components/overview/Sort";
import PopupForm from "../components/planCreation/PopupForm"


function Overview(props) {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const cards = [];
    const userPlans = props.data.plans;
    for (let i = 0; i < userPlans.length; i++) {
        cards.push(<MiniPlanCard key={i.toString()} id={i} data={props.data} />);
    }
    return (
        <div className="Overview">
            <div className="section options-container">
                {isOpen && <PopupForm />}
                <div className="option new-plan-button">
                    <button
                        id="new-plan-button"
                        className=""
                        onClick={togglePopup}
                    >
                        New Plan
                    </button>
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
