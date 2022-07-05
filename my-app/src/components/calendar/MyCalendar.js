import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)


export default function MyCalendar(props) {
    // const planList = props.plan;

    const planList = [
        {
            'title': 'My event',
            'startDate': new Date(2022, 6, 1, ),
            'dueDate': new Date(2022, 6, 10, ),
        },
        {
            'title': 'My second plan',
            'startDate': new Date(2022, 6, 5, ),
            'dueDate': new Date(2022, 6, 12, ),
        }
    ]
    return (
        <div className={"calendarContainer"}>
            <Calendar
                localizer={localizer}
                events={planList}
                startAccessor="startDate"
                endAccessor="dueDate"
                style={{ height: 700, padding: 50 }}
            />
        </div>
    )
}
