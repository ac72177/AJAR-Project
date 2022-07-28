import MiniPlanCard from "./MiniPlanCard";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import CreatePlanButton from "../planModification/CreatePlanButton";
import Filter from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import {getPlansAsync} from "../../redux/plans/thunks";

function List () {
    // const [labels, setLabels] = useState([]);
    const dispatch = useDispatch();
    let userPlans = useSelector((state) => state.plans.list);

    useEffect(() => {
        dispatch(getPlansAsync());
    }, []);

    function handleSort() {
        const sortedData = [...userPlans].sort((a, b) =>
            a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1,
        );
        // setData(sortedData);
    }

    function getAllLabels () {
        const allLabels = [];
        for (let i = 0; i < userPlans.length; i++){
            for (let x=0; x < userPlans[i].labels.length; x++){
                let currLabel = userPlans[i].labels[x].trim();
                if (!allLabels.includes(currLabel) && currLabel!==""){
                    allLabels.push(currLabel);
                }
            }
        } console.log("getting all labels" + allLabels);
        return allLabels;
    }

    function handleFilter(chosenLabel) {
        if (chosenLabel !== 'All') {
            console.log(chosenLabel);
            const filteredData = userPlans.filter( (value) => {
                console.log(value);
                for (let i=0; i<value.labels.length; i++){
                    console.log(value.labels[i]);
                    if (value.labels[i] === chosenLabel) return true;
                }
                return false;
            })
        }
    }

    const labels = getAllLabels().map((e, index) => {
        return <option key={index}> {e} </option>
    })

    const listComponents = userPlans.map((object, index) => {
        return <MiniPlanCard key={index} id={object}/>
    })

    return (
        <>
            <div className="section options-container">
                <div className="option new-plan-button">
                    <CreatePlanButton />
                </div>

                <div className="option sort-button">
                    <i className="fa-solid fa-arrow-up-a-z" onClick={() => handleSort()}> </i>
                    <p className="help-text">Sort</p>
                </div>

                <div className="option filter-button">
                    <i className="fa-solid fa-filter"/>
                    <p className="help-text">Filter</p>
                </div>

                <div>
                    <select onChange={(event) => handleFilter(event.target.value)}>
                        <option className={"optionList"}>All</option>
                            {labels}
                    </select>
                </div>
            </div>


            <ul className="section grid-container">
                {listComponents}
            </ul>
        </>
    )
}

export default List;