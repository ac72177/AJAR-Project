import "./../../styles/overview/MiniTask.css";

function MiniTask(props) {
    return (
        <div className="mini-task">
            <input type="checkbox" />
            <p className="subtask">
                        Task #{props.taskNumber}: {props.data.name}
                    </p>
            <hr className="row-end"></hr>
        </div>
    );
}

export default MiniTask;
