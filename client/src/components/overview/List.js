import MiniPlanCard from "./MiniPlanCard";
import { useEffect, useState } from "react";
import CreatePlanButton from "../planModification/CreatePlanButton";
import { useDispatch, useSelector } from "react-redux";
import { getPlansAsync } from "../../redux/plans/thunks";
import { useAuth0 } from "@auth0/auth0-react";
import MiniPlanCardList from "./MiniPlanCardList";

function List() {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  let userPlans = useSelector((state) => state.plans.list);
  const [plans, setPlans] = useState(userPlans);

  // console.log(userPlans);
  // console.log(plans);

  useEffect(() => {
    dispatch(getPlansAsync(user.sub));
  }, [plans]);

  function handleSort() {
    console.log("handlesort, plans =");

    const sortedData = [...plans].sort((a, b) =>
      a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
    );
    console.log(sortedData);
  }

  function getAllLabels() {
    const allLabels = [];
    for (let i = 0; i < userPlans.length; i++) {
      for (let x = 0; x < userPlans[i].labels.length; x++) {
        let currLabel = userPlans[i].labels[x].trim();
        if (!allLabels.includes(currLabel) && currLabel !== "") {
          allLabels.push(currLabel);
        }
      }
    }
    return allLabels;
  }

  function handleFilter(chosenLabel) {
    console.log("handlingFilter");
    if (chosenLabel !== "All") {
      let filtered = userPlans.filter((value) => {
        for (let i = 0; i < value.labels.length; i++) {
          if (value.labels[i] === chosenLabel) return true;
        }
        return false;
      });
      // setPlans[filtered];
    } else {
      // setPlans[userPlans];
    }
    console.log(plans);
  }

  const labels = getAllLabels().map((e, index) => {
    return <option key={index}> {e} </option>;
  });

  const listComponents = userPlans.map((object, index) => {
    return <MiniPlanCard key={index} id={object} />;
  });

  return (
    <>
      <div className="section options-container fade-in">
        <div className="new-plan-button">
          <CreatePlanButton />
        </div>

        <div className="option sort-button">
          <i className="fa-solid fa-arrow-up-a-z" onClick={() => handleSort()}>
            {" "}
          </i>
          <span className="help-text">Sort</span>
        </div>

        <div className="option filter-button">
          <i className="fa-solid fa-filter" />
          <span className="help-text">Filter</span>
        </div>

        <div>
          <select onChange={(event) => handleFilter(event.target.value)}>
            <option className={"optionList"}>All</option>
            {labels}
          </select>
        </div>
      </div>
      <ul className="section grid-container fade-in">{listComponents}</ul>
      {/*{plans.length > 0 && <MiniPlanCardList plans={plans}/>}*/}
      {/*{plans.length == 0 && <p> Loading </p>}*/}
    </>
  );
}

export default List;
