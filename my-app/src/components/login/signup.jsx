import React from "react";
import {Link} from "react-router-dom";

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            password: ""
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSignupClick = () => {
        const userData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        console.log("Sign up " + userData.name + " " + userData.email + " " + userData.password);
    };

    render() {
        return (
            <div className="base-container">
                <div className="LoginSignup_header">Sign Up</div>
                <div className="content">
                    <div className="LoginSingupForm">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder="name" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="password" onChange={this.onChange}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn" onSubmit={this.onSignupClick}>
                        Sign Up
                    </button>
                </div>
                <Link to={"/login"} className={"LoginSignupLink"}>Already have an account? Login here</Link>
            </div>
        );
    }
}

