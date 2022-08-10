import "../styles/home/Garden.css";
import GardenContainer from "../components/home/GardenContainer";
import SummaryBarContainer from "../components/home/SummaryContainer";
import "../styles/home/SummaryBar.css";
import WelcomeMsgContainer from "../components/home/WelcomeMsgContainer";

export default function GardenView() {
  return (
    <div className={"home"}>
      <WelcomeMsgContainer />

      <SummaryBarContainer />

      <GardenContainer />
    </div>
  );
}
