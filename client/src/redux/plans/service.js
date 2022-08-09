const addPlan = async (plan) => {
  const body = {
    name: plan.name,
    labels: plan.labels,
    startDate: plan.startDate,
    dueDate: plan.dueDate,
    description: plan.description,
    plans: plan.plans,
    owner: plan.owner,
  };
  const response = await fetch("/api/plans", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const deletePlan = async (deleteData) => {
  const response = await fetch(
    "api/plans/" + deleteData.user + "/" + deleteData.plan,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

const getPlans = async (userId) => {
  const response = await fetch("/api/plans/" + userId, {
    method: "GET",
  });
  return response.json();
};

/*
Calls PUT endpoint. 
editedFields: body of this req, 
which is an object with plan id and fieldName: updatedValue for updated fields.
E.g. { _id: "1", name: "new plan name", isComplete: false }
*/
const putPlan = async (editedFields) => {
  const body = editedFields;
  const response = await fetch("/api/plans/" + editedFields._id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

const getPlan = async (planID) => {
  const response = await fetch("/api/plans/plan/" + planID, {
    method: "GET",
  });
  return response.json();
};

const addSubplan = async (subplan) => {
  const body = {
    name: subplan.name,
    labels: subplan.labels,
    startDate: subplan.startDate,
    dueDate: subplan.dueDate,
    description: subplan.description,
    plans: subplan.plans,
    owner: subplan.owner,
    user: subplan.user
  };
  const response = await fetch("/api/plans/" + subplan.owner + "/subplans/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  
  return data;
};

// subplan field contains subplan's owner and subplan ID.
const deleteSubplan = async (subplan) => {
  const response = await fetch(
    "/api/plans/" + subplan.owner + "/subplans/" + subplan._id,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: { user: subplan.user }
    }
  );

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

export default {
  addPlan,
  deletePlan,
  getPlans,
  putPlan,
  getPlan,

  addSubplan,
  deleteSubplan
};
