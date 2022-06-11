export default function SubPlan(props) {
    let subPlan = props.subPlan; 
    return (
        <div>
            <h3>{subPlan.name}</h3>
            <p> {subPlan.description} </p>
            <h4> {subPlan.dueDate} </h4>
        </div>
    )
}
