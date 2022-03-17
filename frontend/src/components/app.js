
import React from 'react';
// import { AuthRoute, ProtectedRoute, PrivateRoute } from '../util/route_util';
import { PrivateRoute } from '../util/route_util';
import { Routes, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashPage from './splash_page/splash_page'
import ShowContainer from './show_page/show_container';
import MainPageContainer from './main_page/main_page_container';
import LikesShowPageContainer from './likes_show_page/like_page_container';
import '../index.scss'

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<SplashPage/>} />
      <Route path='/show/:pinId' element={<ShowContainer/>} />
      <Route path="/home" element={<MainPageContainer/>} />
      <Route path="/likes" element={<LikesShowPageContainer/>} />
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