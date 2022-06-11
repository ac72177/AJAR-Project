import './SubPlan.css'

export default function SubPlan(props) {
    let subPlan = props.subPlan; 
    return (
        <div className="SubPlan">
            <h3>{subPlan.name}</h3>
            <p> {subPlan.description} </p>       
        </div>
    )
}
