import MiniPlanCard from "./MiniPlanCard";

function MiniPlanCardList(props){
    console.log(props);
    console.log("props.plans =" + props.plans);
    const plans = props.plans;
    
    const listComponents = plans.map((object, index) => {
        return <MiniPlanCard key={index} id={object} />;
    });

    return (
        <>
            <ul className="section grid-container">{listComponents}</ul>
        </>
    )
}
export default MiniPlanCardList;