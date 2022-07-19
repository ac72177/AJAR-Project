import "./../styles/overview/Overview.css";
import Filter from "../components/overview/Filter";
import MiniPlanCard from "../components/overview/MiniPlanCard";
import Sort from "../components/overview/Sort";
import CreatePlanButton from '../components/planModification/CreatePlanButton';
import SummaryContainer from "../components/home/SummaryContainer"

import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlansAsync } from "../redux/plans/thunks";
import List from "../components/overview/List";
import {Button} from "react-bootstrap";

function Overview() {
    const dispatch = useDispatch();
    let userPlans = useSelector((state) => state.plans.list);


    useEffect(() => {
        dispatch(getPlansAsync());
    }, []);

    return (
        <div className="Overview">
            <SummaryContainer />
            {/*<div className="section options-container">*/}
            {/*    <div className="option new-plan-button">*/}
            {/*        <CreatePlanButton />*/}
            {/*    </div>*/}
            {/*    <div className="option sort-button">*/}
            {/*        /!*<Sort plans={userPlans}/>*!/*/}
            {/*        /!*<Button onClick={() => handleSort()}> Sort </Button>*!/*/}
            {/*    </div>*/}

            {/*    <div className="option filter-button">*/}
            {/*        <Filter plans={userPlans}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <List sampleData={userPlans}/>

        </div>
    );

}

export default Overview;