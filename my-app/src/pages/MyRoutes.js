import { Routes, Route } from "react-router-dom"
import GardenView from "./GardenView";
import Overview from "./Overview";
import CalendarView from "./CalendarView"
import "./../styles/App.css"
import PlanContainer from "../components/planDetails/PlanContainer";

function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/calendar' element={<CalendarView />}/> 
        <Route path='/overview' element={<Overview />}/>
        <Route path='/home' exact-to element={<GardenView />}/> 
        <Route path='/plans/:plan_ID' element={<PlanContainer />} />           
      </Routes>
    </div>
  )
}

export default MyRoutes;