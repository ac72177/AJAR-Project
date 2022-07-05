import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

export default function MyCalendar(props) {
    const planList = props.plans;

    return (
        <div className={"calendarContainer"}>
            <Calendar
                localizer={localizer}
                events={planList}
                titleAccessor="name"
                startAccessor="startDate"
                endAccessor="dueDate"
                style={{ height: 900, padding: 50 }}
            />
        </div>
    )
}
