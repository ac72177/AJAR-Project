import MiniPlanCard from "./MiniPlanCard";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import CreatePlanButton from "../planModification/CreatePlanButton";
import Filter from "./Filter";

function List (props) {
    const [sampleData, setSampleData] = useState([]);

    useEffect(() => {
        console.log(props.sampleData);
        setSampleData(props.sampleData)
    }, [])

    function handleSort() {
        const sortedData = [...props.sampleData].sort((a, b) =>
            a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1,
        );
        setSampleData(sortedData);
    }

    const listComponents = sampleData.map((object, index) => {
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
                    <i className="fa-solid fa-arrow-up-a-z" onClick={() => alert("TODO: open filter by label")}> </i>
                    <p className="help-text">Filter</p>
                </div>
            </div>


            <ul className="section grid-container">
                {listComponents}
            </ul>
        </>
    )
}

export default List;