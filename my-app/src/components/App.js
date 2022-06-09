import "../styles/App.css";
import Filter from "./Filter";
import MiniPlan from "./MiniPlan";
import Sort from "./Sort";

function App(props) {
    const cards = [];
    for (let i = 0; i < props.data.plans.length; i++) {
        cards.push(
            <MiniPlan key={i.toString()} cardNumber={i} data={props.data} />
        );
    }
    return (
        <div className="App">
            <div className="options-container">
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

            <div className="grid-container">{cards}</div>
        </div>
    );
}

export default App;
