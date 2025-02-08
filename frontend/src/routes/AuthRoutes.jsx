import { lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const ForgetPassword = lazy(() => import('../pages/ForgotPassword'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

function AuthRouter() {
    return (
      
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forget-password' element={<ForgetPassword />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
       
    )
}

export default AuthRouter;
