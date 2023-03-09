import React, { useState } from 'react';
import Navbar from './Navbar';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';


export default function ContentContainer() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'blog':
                return <Blog />;
            case 'projects':
                return <Projects />;
            case 'contact':
                return <Contact />;
            case 'home':
                return <Home />
            default:
                return <Home />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar className='border-b-4 border-solid border-black' pikachu={handlePageChange} />
            <div className='p-2 sm:p-6'>
            {renderPage()}
            </div>
            
        </div>
        
    )
}