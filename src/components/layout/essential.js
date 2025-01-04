import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';


const MainLayout = ({children}) => {
    return (
        <div>
           <Header />
            <main className='content'>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
