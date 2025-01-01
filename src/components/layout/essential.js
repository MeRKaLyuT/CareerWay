import React from 'react';
import Header from '../common/header';

const MainLayout = ({children}) => {
    return (
        <div className='layout'>
            <Header />
            <main className='content'>
                {children}
            </main>
        </div>
    );
}

export default MainLayout;
