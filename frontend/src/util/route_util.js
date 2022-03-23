import React from 'react';
import { connect } from 'react-redux';
import { Route, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

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


const Private = ({ loggedIn, children }) => {
    return !loggedIn ? children : <Navigate to="/home" />;
  }
  

const mapStateToProps = state => (
    { loggedIn: state.session.isAuthenticated }
);

export const PrivateRoute = withRouter(connect(mapStateToProps)(Private));


export { withRouter };