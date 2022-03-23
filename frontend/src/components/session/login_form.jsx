import React from 'react';
import { withRouter } from '../../util/route_util';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.router.navigate("home")
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
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

    demoLogin() {
        const demoUser = {
            email: "demo@demo.com",
            password: "password"
        }
        this.props.login(demoUser);
    }

    render() {
        return (
            <div className="session-form-container">
                <div className="logo-wrapper">
                    <Link to="/">
                        <img id="logo" src='images/trippy-logo.jpeg' alt="logo" />
                    </Link>
                </div>

                <h1>Log In</h1>

                <button className='demo-btn' onClick={() => this.demoLogin()}>Login as Demo User</button>

                <div className='divider'>
                    <strong className='divider-title'>OR</strong>
                </div>
            

                <form onSubmit={this.handleSubmit} className="form-box">
                    <div className="form-elements">
                        <label className='form-input-titles'>Email
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
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
                        <input type="submit" value="Submit" className="session-submit" />
                        {this.renderErrors()}
                    </div>
                </form>
                
                <p className='switch-btn'>
                    Don't have an account? <Link to="/signup">Sign up.</Link>
                </p>

            </div>
        );
    }
}

export default withRouter(LoginForm);