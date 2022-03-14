
import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Routes, Route } from 'react-router-dom';
import MainPage from './main_page/main_page';
import SplashPage from './splash_page/splash_page';
import '../index.scss'
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';


const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<SplashPage/>} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </Routes>
  </div>
);

export default App;