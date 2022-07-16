function Sort(props) {
    const plans = props.plans;
    return (
        <div>
            <i
                className="fa-solid fa-arrow-up-a-z"
                // TODO @Rene Sort functionality
                onClick={() => alert("TODO: open sort by label")}
            ></i>
            <p className="help-text">Sort</p>
        </div>
    );
}

export default Sort;
