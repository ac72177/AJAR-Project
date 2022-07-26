import "./../../styles/overview/ProgressBar.css";
import ProgressBar from 'react-bootstrap/ProgressBar'

function MyProgressBar(props) {
    const currPlan = props.props;

    const progress = () => {
        let completed = 0;
        let incompleted = 0;

        for (let i = 0; i < currPlan.plans.length; i++){
            if (currPlan.plans[i].isComplete === true) {
                completed++;
            } else {
                incompleted++;
            }
        }
        let percentage = completed/(completed+incompleted);
        return percentage*100;
    }

    return (
        <div className="w3-light-grey">
            {/*<div className="w3-grey w3-container w3-center">*/}
                {/*<p className="bar">{progress()}</p>*/}
                <ProgressBar now={progress()} label={`${progress()}%`} />
            {/*</div>*/}
        </div>
    );
}

export default MyProgressBar;
