import './../../styles/planDetails/SubPlan.css'

export default function SubPlan(props) {
    let subPlan = props.subPlan;
    return (
        <div className="SubPlan">
            <h3 className={props.isComplete ? "complete" : undefined}>{subPlan.name}</h3>
            <p> {subPlan.description} </p>       
        </div>
    )
}
