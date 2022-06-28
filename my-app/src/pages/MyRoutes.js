import { Routes, Route } from "react-router-dom"
import GardenView from "./GardenView";
import Overview from "./Overview";
import CalendarView from "./CalendarView"
import TestPage from "./TestPage"
import "./../styles/App.css"

function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/calendar' element={<CalendarView />}/> 
        {/* TODO @Andrea dummyData is currently broken, please fix */}
        {/* <Route path='/overview' element={<Overview data={dummyData}/>}/>*/}
        <Route path='/overview' element={<Overview />}/>
        <Route path='/test' element={<TestPage />}/>    
        <Route path='/home' exact-to element={<GardenView />}/>            
      </Routes>
    </div>
  )
}

export default MyRoutes;