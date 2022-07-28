import "../styles/home/Garden.css";
import GardenContainer from '../components/home/GardenContainer'
import SummaryBarContainer from "../components/home/SummaryContainer";
import WelcomeMsg from "../components/home/WelcomeMsg";
import '../styles/home/SummaryBar.css';


export default function GardenView() {
    return (
        <div className={"home"}>
            <WelcomeMsg />
            <br/>

            <SummaryBarContainer />

            <GardenContainer />
        </div>
    );
}