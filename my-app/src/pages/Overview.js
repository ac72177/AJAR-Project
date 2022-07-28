import "./../styles/overview/Overview.css";
import SummaryContainer from "../components/home/SummaryContainer"
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlansAsync } from "../redux/plans/thunks";
import List from "../components/overview/List";

function Overview() {
    // const dispatch = useDispatch();
    // let userPlans = useSelector((state) => state.plans.list);
    // const [data, setData] = useState(userPlans);

    // useEffect(() => {
    //     let plans = dispatch(getPlansAsync());
    //     setData(plans);
    // }, [data]);

    return (
        <div className="Overview">
            <SummaryContainer />
            {/* {userPlans.length > 0 && */}
            <List /> 
            {/* } */}
            {/* {userPlans.length == 0 &&
                <p> loading </p> } */}
                

        </div>
    );

}
export default Overview;