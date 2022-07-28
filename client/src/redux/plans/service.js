const addPlan = async (plan) => {
    const body = {
        name: plan.name,
        labels: plan.labels,
        startDate: plan.startDate,
        dueDate: plan.dueDate,
        description: plan.description,
        plans: plan.plans
    }
    const response = await fetch('/api/plans', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    return data;
};

const deletePlan = async (id) => {
    const response = await fetch('/api/plans/' + id, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    
    return data;
};

const getPlans = async () => {
    const response = await fetch('/api/plans', {
        method: 'GET'
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
    const body = editedFields
    const response = await fetch('/api/plans/' + editedFields._id, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    
    return data;
}

export default {
    addPlan,
    deletePlan,
    getPlans,
    putPlan
};