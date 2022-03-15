
import React from 'react';
// import { AuthRoute, ProtectedRoute, PrivateRoute } from '../util/route_util';
import { PrivateRoute } from '../util/route_util';
import { Routes, Route } from 'react-router-dom';
import MainPage from './main_page/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashPage from './splash_page/splash_page'
import '../index.scss'

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<SplashPage/>} />
      <Route path="/home" element={<MainPage/>} />
      <Route path="/signup" element={ <PrivateRoute>
                                        <SignupFormContainer /> 
                                      </PrivateRoute>
                                    }
      />
      <Route path="/login" element={<PrivateRoute>
                                      <LoginFormContainer />
                                    </PrivateRoute>
                                    }
      />
    </Routes>
  </div>
);

export default App;