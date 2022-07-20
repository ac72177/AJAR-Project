import "./../styles/overview/Overview.css";
import SummaryContainer from "../components/home/SummaryContainer"
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlansAsync } from "../redux/plans/thunks";
import List from "../components/overview/List";

function Overview() {
    const dispatch = useDispatch();
    let userPlans = useSelector((state) => state.plans.list);

    useEffect(() => {
        dispatch(getPlansAsync());
    }, []);

    return (
        <div className="Overview">
            <SummaryContainer />
            {/*userPlans? <List sampleData ={userPlans}/> : <Loading/>*/}
            <List sampleData={userPlans} />

        </div>
    );

}
export default Overview;