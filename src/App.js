import React from 'react';
import Home from'./pages/home';
import Profile from './pages/profile';
import Roadmap from './pages/roadmap';
import AuthPage from './pages/authpage';
import Backender from './pages/roadmaps/backender';
import ProfTest from './pages/proftest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/essential';


const App = () => {
    return (
            <Router basename='/'>
                <MainLayout>
                    <Routes>
                        <Route path = '/' element={<Home />} />
                        <Route path='/roadmap' element={<Roadmap />}/>
                        <Route path='/roadmap/backender' element={<Backender />}/>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/login' element={<AuthPage />} />
                        <Route path='/proftest' element={<ProfTest />} />
                    </Routes>
                </MainLayout>
            </Router>
    );
};

  
export default App;