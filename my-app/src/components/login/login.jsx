import React from "react";
import {Link} from "react-router-dom";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onLoginClick = () => {
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log("Login " + userData.username + " " + userData.password);
    };

    render() {
        return (
            <div className="base-container">
                <div className="LoginSignup_header">Login</div>
                <div className="content">
                    <div className="LoginSingupForm">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" onChange={this.onChange}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn" onSubmit={this.onLoginClick}>
                        Login
                    </button>
                </div>
                <Link to="/signup" className={"LoginSignupLink"} >Don't have an account? Signup here</Link>
            </div>
        );
    }
}