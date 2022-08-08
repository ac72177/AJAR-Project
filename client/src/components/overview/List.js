import { useEffect, useState } from "react";
import CreatePlanButton from "../planModification/CreatePlanButton";
import { useDispatch, useSelector } from "react-redux";
import { getPlansAsync } from "../../redux/plans/thunks";
import { useAuth0 } from "@auth0/auth0-react";
import MiniPlanCardList from "./MiniPlanCardList";
import { selectPlans, selectFilteredPlans } from "../../redux/plans/reducer";

function List() {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const userPlans = useSelector(selectPlans);
  const filteredPlans = useSelector(selectFilteredPlans);
  const [sortOrder, setSortOrder] = useState(false);

  useEffect(() => {
    dispatch(getPlansAsync(user.sub));
  }, []);

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
    dispatch({ type: "filters/labelFilterChanged", payload: chosenLabel });
  }

  const labels = getAllLabels().map((e, index) => {
    return <option key={index}> {e} </option>;
  });

  return (
    <>
      <div className="section options-container">
        <div className="option new-plan-button">
          <CreatePlanButton />
        </div>

        <div className="option filter-button">
          <i className="fa-solid fa-filter" />
          <p className="help-text">Filter</p>
        </div>

        <div>
          <select onChange={(event) => handleFilter(event.target.value)}>
            <option className={"optionList"}>All</option>
            {labels}
          </select>
        </div>
      </div>

      <MiniPlanCardList plans={filteredPlans} />
    </>
  );
}

export default List;
