import { Routes, Route } from "react-router-dom"
import GardenView from "./GardenView";
import Overview from "./Overview";
import CalendarView from "./CalendarView"
import TestPage from "./TestPage"
import dummyData from "../dummyData.json"; // todo remove
import "./../styles/App.css"

function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/calendar' element={<CalendarView />}/> 
        <Route path='/overview' element={<Overview data={dummyData}/>}/>  
        <Route path='/test' element={<TestPage />}/>    
        <Route path='/home' exact-to element={<GardenView />}/>            
      </Routes>
    </div>
  )
}

export default MyRoutes;