import SummaryBar from "./SummaryBar";
import './../../styles/home/SummaryBar.css';
import { useSelector } from 'react-redux';

export default function SummaryBarContainer() {
    const plans = useSelector(state => state.plans);

    return (
        <div className='SummaryBarContainer'>
            <SummaryBar plans={plans}/>
        </div>
    );
}