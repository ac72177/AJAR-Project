import "./../../styles/overview/MiniTask.css";

function MiniTask(props) {
    return (
        <div className="mini-task">
            <div className="row">
                <div className="checkbox column">
                    <input type="checkbox" />
                </div>

                <div className="subtask column">
                    <p>
                        Task #{props.taskNumber}: {props.data.name}
                    </p>
                </div>
            </div>
            <hr className="row-end"></hr>
        </div>
    );
}

export default MiniTask;
