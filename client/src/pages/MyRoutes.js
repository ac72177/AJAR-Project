import { Routes, Route } from "react-router-dom";
import GardenView from "./GardenView";
import Overview from "./Overview";
import CalendarView from "./CalendarView";
import SharePlan from "./SharePlan";
import "./../styles/App.css";
import PlanContainer from "../components/planDetails/PlanContainer";

function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/plans" element={<Overview />} />
        <Route path="/plans/:plan_ID" element={<PlanContainer />} />
        <Route path="/" exact-to element={<GardenView />} />
        <Route path="/share" exact-to element={<SharePlan />} />
      </Routes>
    </div>
  );
}

export default MyRoutes;
