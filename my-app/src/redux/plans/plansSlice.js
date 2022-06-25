const initialState = [
    {
        _id: 1,
        name: "Start new hobbies",
        labels: ["Summer", "Fall"],
        startDate: "2022-07-02",
        dueDate: "2022-09-03",
        isComplete: false,
        attachments: [],
        description: "Something to do in the summer",
        plans: [
            {
                name: "walk the dog",
                isComplete: true,
            }, {
                name: "Go camping",
                isComplete: false
            }
        ]
    }, 
    {
        _id: 2,
        name: "Job hunt",
        labels: ["Summer", "Fall"],
        startDate: "2022-06-02",
        dueDate: "2022-06-30",
        isComplete: false,
        attachments: [],
        description: "Something to do in the summer",
        plans: [
            {
                name: "write a cover letter",
                isComplete: true
            },
            {
                name: "write resume",
                isComplete: false
            }
        ]
    },
    {
        _id: 3,
        name: "Pay credit card bill",
        labels: ["Summer", "Fall"],
        startDate: "2022-07-02",
        dueDate: "2022-09-03",
        isComplete: true,
        attachments: [],
        description: "Something to do in the summer",
        plans: []
    },
    {
        _id: 4,
        name: "Go kayaking",
        labels: ["Summer", "Fall"],
        startDate: "2022-07-02",
        dueDate: "2022-09-03",
        isComplete: false,
        attachments: [],
        description: "Something to do in the summer",
        plans: [
            {
                name: "buy a kayak",
                isComplete: false
            },
            {
                name: "invite some friends",
                isComplete: false
            },
            {
                name: "buy a life jacket",
                isComplete: false
            },
            {
                name: "take swimming lessons",
                isComplete: false
            },
            {
                name: "buy a fishing rod",
                isComplete: false
            },
            {
                name: "this is a super long sentence that is a test",
                isComplete: false
            },
            {
                name: "this is another long sentence",
                isComplete: false
            }
        ]
    }
]

function nextPlanId(plans) {
    const maxId = plans.reduce((maxId, plan) => Math.max(plan.id, maxId), -1)
    return maxId + 1
}

export default function plansSliceReducer(state = initialState, action) {
    switch (action.type) {
        case 'plans/addPlan': {
            return [
                ...state,
                {
                    _id: nextPlanId(state),
                    name: action.payload.name,
                    label: action.payload.label,
                    startDate: action.payload.startDate,
                    dueDate: action.payload.dueDate,
                    isComplete: action.payload.isComplete,
                    attachments: action.payload.attachments,
                    description: action.payload.description,
                    plans: action.payload.plans,
                }
            ]
        }
        case 'plans/deletePlans': {
            return []
        }
        case 'plans/deletePlan': {
            if (state.length === action.payload) return [...state.slice(0, action.payload - 1)]
            if (state.length === 1) return [];
            return [
                ...state.slice(0, action.payload - 1),
                ...state.slice(action.payload - 1)
            ]
        }
        case 'plans/markAllComplete': {
            const newState = state;
            const planCopy = state[action.payload - 1];
            const subPlans = planCopy.plans;
            for (let i = 0; i < subPlans.length; i++) {
                if (!subPlans[i].isComplete) subPlans[i].isComplete = true;
                console.log(subPlans[i].isComplete);
            }
            planCopy.plans = subPlans;
            newState[action.payload - 1] = planCopy;
            return newState;
        }
        //  GET
        default:
            return state;

    }
}