import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Customer = lazy(() => import('../pages/Customer'))
const NotFoundPage = lazy(() => import('../pages/NotFound'));


export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/customers' element={<Customer />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}