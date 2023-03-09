import React from 'react';

export default function Navbar(handlePageChange) {
    return (
        <nav className=''>
            <div onClick={() => handlePageChange('about')}>Matt Brandenburgh</div>
            <div>
            <div onClick={() => handlePageChange('blog')} classname='border-5px p-4'>Blog</div>
            <div onClick={() => handlePageChange('projects')} classname='border-5px p-4'>Projects</div>
            <div onClick={() => handlePageChange('contact')} classname='border-5px p-4'>Contact</div>
            </div>
            
        </nav>
    )
}