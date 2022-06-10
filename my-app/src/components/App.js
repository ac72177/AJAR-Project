import "../styles/App.css";
import Filter from "./Filter";
import MiniPlanCard from "./MiniPlanCard";
import Sort from "./Sort";

function App(props) {
    const cards = [];
    const userPlans = props.data.plans;
    for (let i = 0; i < userPlans.length; i++) {
        cards.push(<MiniPlanCard key={i.toString()} id={i} data={props.data} />);
    }
    return (
        <div className="App">
            <div className="section options-container">
                <div className="option new-plan-button">
                    <button
                        id="new-plan-button"
                        className=""
                        onClick={() => alert("TODO: open create plan modal")}
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

export default App;
