import MiniPlanCard from "./MiniPlanCard";

function MiniPlanCardList(props) {
  const plans = props.plans;

  const listComponents = plans.map((object, index) => {
    return <MiniPlanCard key={index} id={object} />;
  });

  return (
    <>
      <ul className="section grid-container">{listComponents}</ul>
    </>
  );
}
export default MiniPlanCardList;
