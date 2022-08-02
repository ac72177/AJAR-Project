import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function MyCalendar(props) {
  const planList = props.plans;

  return (
    <div className={"calendarContainer"}>
      <Calendar
        localizer={localizer}
        events={planList}
        titleAccessor="name"
        startAccessor="startDate"
        endAccessor={planList => {return new Date(planList.dueDate).setHours(3,3,3,3)}}
        style={{ height: 800, padding: 50 }}
        popup
        views={["month"]}
      />
    </div>
  );
}
