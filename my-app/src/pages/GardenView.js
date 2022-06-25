import "../styles/home/Garden.css";
import Garden from '../components/home/Garden'
import SummaryBarContainer from "../components/home/SummaryContainer";
import WelcomeMsg from "../components/home/WelcomeMsg";
import '../styles/home/SummaryBar.css';


export default function GardenView() {
    return (
        <div className={"home"}>
            <WelcomeMsg />
            <br/>

            <SummaryBarContainer />

            <Garden />
        </div>
    );
}