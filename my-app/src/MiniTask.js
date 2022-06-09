function MiniTask(props) {
    return(<div>
        <p>Task #{props.taskNumber}: {props.data.name}</p>
    </div>);
}

export default MiniTask;