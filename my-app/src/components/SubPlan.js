export default function SubPlan(props) {
    let subPlan = props.subPlan; 
    return (
        <div>
            <h3>{subPlan.name}</h3>
            <h4> {subPlan.description} </h4>
            <h4> {subPlan.dueDate} </h4>
        </div>
    )
}
