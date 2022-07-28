import "./../styles/overview/Overview.css";
import SummaryContainer from "../components/home/SummaryContainer"
import List from "../components/overview/List";

function Overview() {

    return (
        <div className="Overview">
            <SummaryContainer />
            <List />
        </div>
    );

}
export default Overview;