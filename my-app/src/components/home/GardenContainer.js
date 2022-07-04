// import Garden from "./Garden";
import './../../styles/home/Garden.css';
import {useSelector} from "react-redux";
import Garden from "./Garden";

export default function GardenContainer() {
    const plans = useSelector((state) => state.plans.list);

    return (
        <div className='garden'>
            <Garden plans={plans}/>
        </div>
    );
}