import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, useLocation, useNavigate, useParams } from 'react-router-dom';

// Wrapper to use withRouter in React Router v6
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{ location, navigate, params }}/>
        );
    }
    return ComponentWithRouterProp;
}

// const Auth = ({ component: Component, path, loggedIn, exact }) => (
//     <Route path={path} exact={exact} render={(props) => (
//         !loggedIn ? (
//             <Component {...props} />
//         ) : (
//             // // Redirect to the tweets page if the user is authenticated
//             // <Redirect to="/tweets" />
//         )
//     )} />
// );

const Protected = ({ component: Component, loggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            loggedIn ? (
                <Component {...props} />
            ) : (
                // Redirect to the login page if the user is already authenticated
                <Redirect to="/login" />
            )
        }
    />
);

const mapStateToProps = state => (
    { loggedIn: state.session.isAuthenticated }
);

// export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));