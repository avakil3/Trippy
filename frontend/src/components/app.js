
import React from 'react';
import { AuthRoute, ProtectedRoute, PrivateRoute } from '../util/route_util';
import { Routes, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashPage from './splash_page/splash_page'
import '../index.scss'
import MainPageContainer from './main_page/main_page_container';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<SplashPage/>} />
      <Route path="/home" element={<MainPageContainer/>} />
      {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
      {/* <PrivateRoute path="/signup" component={SignupFormContainer} /> */}
      <Route path="/signup" element={ <PrivateRoute> <SignupFormContainer /> </PrivateRoute> }
/>
    </Routes>
  </div>
);

export default App;