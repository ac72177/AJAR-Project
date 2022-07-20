import MiniPlanCard from "./MiniPlanCard";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import CreatePlanButton from "../planModification/CreatePlanButton";
import Filter from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import {getPlansAsync} from "../../redux/plans/thunks";

function List (props) {
    const plans = [];
    const [data, setData] = useState(props.sampleData);

    useEffect(() => {
        console.log("trigger");
        // console.log("props.sampleData in useEffect = " +sampleData);
        if (props.sampleData !== null) {
            for (let i =0; i< props.sampleData.length; i++){
                plans.push(props.sampleData[i]);
            } setData(plans);
        }
    }, [])

    console.log("after setting data to props.sampleData = " + data);

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
    }, [labels])
    // console.log("labels" + labels);

    function getAllLabels () {
        const allLabels = [];
        for (let i = 0; i < data.length; i++){
            // console.log(data[i]);
            for (let x=0; x < data[i].labels.length; x++){
                let currLabel = data[i].labels[x];
                // console.log(currLabel);
                if (!allLabels.includes(currLabel)){
                    allLabels.push(currLabel);
                }
            }
        } console.log(allLabels);
        return allLabels;
    }

    function handleFilter(chosenLabel) {
        if (chosenLabel !== 'Select label') {
            console.log(chosenLabel);
            const filteredData = data.filter( (value) => {
                console.log(value);
                for (let i=0; i<value.labels.length; i++){
                    console.log(value.labels[i]);
                    if (value.labels[i] !== "" && value.labels[i] === chosenLabel) return true;
                }
                return false;
            })
            console.log(filteredData);
            setData(filteredData);
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
                    <i className="fa-solid fa-arrow-up-a-z"/>
                    <p className="help-text">Filter</p>
                    <select onChange={(event) => handleFilter(event.target.value)}>
                        {/*<option value="outdoor">Outdoor</option>*/}
                        {/*<option value="fun">Fun</option>*/}
                        <option className={"optionList"}> Select label </option>
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