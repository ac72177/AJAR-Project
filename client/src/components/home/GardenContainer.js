import './../../styles/home/Garden.css';
import {useDispatch, useSelector} from "react-redux";
import Garden from "./Garden";
import {useEffect} from "react";
import {getPlansAsync} from "../../redux/plans/thunks";

export default function GardenContainer() {
    const dispatch = useDispatch();
    const userPlans = useSelector((state) => state.plans.list);
    const plans = [];

    useEffect(() => {
        dispatch(getPlansAsync());
    }, []);


    for (let i = 0; i < userPlans.length; i++) {
        plans.push(userPlans[i]);
    }

    return (
        <div className='garden'>
            <Garden plans={plans}/>
        </div>
    );
}