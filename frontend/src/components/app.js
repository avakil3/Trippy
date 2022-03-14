
import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import { Routes, Route } from 'react-router-dom';
import MainPage from './main_page/main_page';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';


const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<MainPage/>} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </Routes>
  </div>
);

export default App;