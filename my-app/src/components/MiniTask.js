function MiniTask(props) {
    return (
        <div>
            <input type="checkbox" />
            <p>
                Task #{props.taskNumber}: {props.data.name}
            </p>
            <hr></hr>
        </div>
    );
}

export default MiniTask;
