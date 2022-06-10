import { Routes, Route } from "react-router-dom"
import Navbar from './navBar/Navbar'
import GardenView from "./../pages/GardenView";
import Overview from "./../pages/Overview";
import CalendarView from "./../pages/CalendarView"
import TestPage from "./../pages/TestPage"
import dummyData from "../dummyData.json"; // todo remove

function App() {
  return (
    <div className="App"  style={{display: "flex"}}>
      <Navbar />
      <Routes>
        <Route path='/calendar' element={<CalendarView />}/> 
        <Route path='/overview' element={<Overview data={dummyData}/>}/>  
        <Route path='/test' element={<TestPage />}/>    
        <Route path='/home' exact-to element={<GardenView />}/>            
      </Routes>
    </div>
  )
}

export default App;
