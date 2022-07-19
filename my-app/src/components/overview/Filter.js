import {useEffect, useState} from "react";

function Filter(props) {
    const plans = props.plans;
    // console.log("plans" + plans)


    return (
        <div>
            <i className="fa-solid fa-arrow-up-a-z"
                onClick={() => alert("TODO: open filter by label")}
            >
            </i>
            <p className="help-text">Filter</p>
        </div>
    )
};

export default Filter;
