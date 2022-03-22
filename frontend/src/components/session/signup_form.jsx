import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from '../../util/route_util';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.router.navigate("/login")
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    demoLogin() {
        const demoUser = {
            email: "demo@demo.com",
            password: "password"
        }
        this.props.login(demoUser);
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.navigate);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li className='sign-up-errors' key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-form-container">
                <div className="logo-wrapper">
                    <Link to="/">
                        <img id="logo" src='images/trippy-logo.jpeg' alt="logo" />
                    </Link>
                </div>

                <h1>Sign Up</h1>

                <button className='demo-btn' onClick={() => this.demoLogin()}>Login as Demo User</button>

                <div className='divider'>
                    <strong className='divider-title'>OR</strong>
                </div>
                
                <button className='switch-btn'>
                    <Link to="/login">
                        Already have an account?
                    </Link>
                </button>

                <div className='divider'>
                    <strong className='divider-title'>OR</strong>
                </div>

                <form onSubmit={this.handleSubmit} className="form-box">
                    <div className="form-elements">
                        <br />
                        <label className='form-input-titles'>Email
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="form-input"
                        />
                        </label>
                        <br />
                        <label className='form-input-titles'>Username
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                            className="form-input"
                        />
                        </label>
                        <br />
                        <label className='form-input-titles'>Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="form-input"
                        />
                        </label>
                        <br />
                        <label className='form-input-titles'>Confirm Password
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                            className="form-input"
                        />
                        </label>
                        <br />
                        <input type="submit" value="Submit"
                        className="session-submit"/>
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);