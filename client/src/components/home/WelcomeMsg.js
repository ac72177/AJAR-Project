export default function WelcomeMsg(props) {
    const userName = props.userName;

  return (
    <div className="Welcome-message">
      <h1>
        {" "}
        <strong> Hi {userName}! </strong>{" "}
      </h1>
    </div>
  );
}
