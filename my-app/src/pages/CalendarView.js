import MyCalendar from "../components/calendar/MyCalendar"
import {useSelector} from "react-redux";
export default function CalendarView() {
    const plans = useSelector(state => state.plans)

    return (
        <div>
            <MyCalendar plans={{plans}} />
        </div>
    );
}