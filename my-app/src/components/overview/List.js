import MiniPlanCard from "./MiniPlanCard";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import CreatePlanButton from "../planModification/CreatePlanButton";
import Filter from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import {getPlansAsync} from "../../redux/plans/thunks";

function List (props) {

    const [data, setData] = useState(props.sampleData);

    useEffect(() => {
        setData(data);
    }, [])

    function handleSort() {
        const sortedData = [...data].sort((a, b) =>
            a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1,
        );
        setData(sortedData);
    }

    const listComponents = data.map((object, index) => {
        return <MiniPlanCard key={index} id={object}/>
    })

    const [labels, setLabels] = useState([]);

    useEffect(() => {
        // console.log("in label useEffect");
        setLabels(getAllLabels());
    }, [])
    // console.log("labels" + labels);

    function getAllLabels () {
        const allLabels = [];
        for (let i = 0; i < data.length; i++){
            // console.log(data[i]);
            for (let x=0; x < data[i].labels.length; x++){
                let currLabel = data[i].labels[x].trim();
                // console.log(currLabel);
                if (!allLabels.includes(currLabel) && currLabel!==""){
                    allLabels.push(currLabel);
                }
            }
        } console.log(allLabels);
        return allLabels;
    }

    function handleFilter(chosenLabel) {
        setData(props.sampleData);
        if (chosenLabel !== 'All') {
            console.log(chosenLabel);
            const filteredData = props.sampleData.filter( (value) => {
                console.log(value);
                for (let i=0; i<value.labels.length; i++){
                    console.log(value.labels[i]);
                    if (value.labels[i] === chosenLabel) return true;
                }
                return false;
            })
            setData(filteredData);
        } else {
            setData(props.sampleData);
        }
    }

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
                            {labels.map((e, index) => {
                                return <option key={index}> {e} </option>
                            })}
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