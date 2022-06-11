import Form from './Form'

export default function PopupForm(props) {
    return (
        <div className="popup-box" onClick={props.handleClose}>
            <div className="box">
                <Form />
            </div>
        </div>
            
    );
}