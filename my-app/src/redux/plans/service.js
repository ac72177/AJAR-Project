const addPlan = async (plan) => {
    const body = {
        planName: plan.planName,
        ingredients: plan.ingredients.split(","),
        steps: plan.steps.split(",")
    }
    const response = await fetch('http://localhost:3001/plans', {
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
    const response = await fetch('http://localhost:3001/plans/' + id, {
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
    const response = await fetch('http://localhost:3001/plans', {
        method: 'GET'
    });
    return response.json();
};

const putPlan = async (plan) => {
    const body = {
        planName: plan.planName,
        ingredients: plan.ingredients.split(","),
        steps: plan.steps.split(",")
    }
    const response = await fetch('http://localhost:3001/plans/' + plan.id, {
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
};

export default {
    addPlan,
    deletePlan,
    getPlans,
    putPlan
};
