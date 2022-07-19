import MiniPlanCard from "./MiniPlanCard";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import CreatePlanButton from "../planModification/CreatePlanButton";
import Filter from "./Filter";

function List (props) {
    console.log("props.sampleData at beginning = " + props.sampleData);
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("trigger");
        console.log("props.sampleData in useEffect = " +props.sampleData);
        if (props.sampleData !== null){
            setData(props.sampleData)
        }
    }, [])
    console.log("after setting data to props.sampleData = " + data);

    function handleSort() {
        const sortedData = [...data].sort((a, b) =>
            a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1,
        );
        setData(sortedData);
    }

    function handleFilter(chosenLabel) {
        if (chosenLabel !== 'All') {
            console.log(chosenLabel);
            const filteredData = data.filter( (value) => {
                console.log(value);
                for (let i=0; i<value.labels.length; i++){
                    console.log(value.labels[i]);
                    if (value.labels[i] === chosenLabel) return true;
                }
                return false;
            })
            console.log(filteredData);
            setData(filteredData);
        } else {
            setData(data);
        }
    }

    const listComponents = data.map((object, index) => {
        return <MiniPlanCard key={index} id={object}/>
    })

    const [labels, setLabels] = useState(['All']);

    function getAllLabels () {
        const allLabels = [];
        for (let i = 0; i < data.length; i++){
            for (let x=0; x < data[i].labels.length; x++){
                let currLabel = data[i].labels[x];
                if (!allLabels.includes(currLabel)){
                    allLabels.push(currLabel);
                }
            }
        } setLabels(allLabels);
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
                        <option className={"optionList"}>
                            {labels.map((value, index) => (
                                <li className={"optionItem"} key={index}> {value} </li>
                            ))}
                        </option>
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