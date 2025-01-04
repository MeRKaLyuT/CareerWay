import React from 'react';
import Home from'./pages/home';
import Profile from './pages/profile';
import Roadmap from './pages/roadmap';
import Login from './pages/login';
import Test from './pages/test';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/essential';


const App = () => {
    return (
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path = '/' element={<Home />} />
                        <Route path='/roadmap' element={<Roadmap />}/>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </MainLayout>
            </Router>
    );
};

  
export default App;