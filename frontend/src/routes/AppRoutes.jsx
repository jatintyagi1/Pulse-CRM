import { lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));


export default function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </HashRouter>
    )
}