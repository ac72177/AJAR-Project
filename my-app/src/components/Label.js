import "../styles/Label.css";

function Label(props) {
    return (
        <div className="label">
            <h6>{props.data}</h6>
        </div>
    );
}

export default Label;
