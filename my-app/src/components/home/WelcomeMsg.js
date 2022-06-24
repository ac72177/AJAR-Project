
export default function WelcomeMsg() {
    let data = require('../../dummyData.json');
    let userName = data.user;

    return (
        <div className='Welcome-message'>
            <h1> <strong> Hi {userName}! </strong> </h1>
        </div>
    );
}