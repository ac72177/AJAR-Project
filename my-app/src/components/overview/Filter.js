function Filter(props) {
    const plans = props.plans;

    let allLabels = [];

    // for (const plan in plans){
    //     for (let i=0; i < plan.labels.length; i++){
    //         if(allLabels.findIndex(plan.labels[i]) === -1){
    //             allLabels.push(plan.labels[i]);
    //         }
    //     }
    // }
    // console.log(allLabels);

    return (
        <div>
            <i
                className="fa-solid fa-filter"
                // TODO @Rene filter functionality
                onClick={() => alert("TODO: open filter by label")}
            ></i>
            <p className="help-text">Filter</p>
        </div>
    );
}

export default Filter;
