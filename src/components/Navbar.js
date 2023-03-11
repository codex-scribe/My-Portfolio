import React from 'react';

export default function Navbar(props) {
    return (
        <nav className='sm:flex-row sm:flex sm:justify-between border-b-4 border-solid border-black'>
            <div className='sm:p-6 text-4xl cursor-pointer' onClick={() => props.pikachu('about')}>Matt Brandenburgh</div>
            <div className='sm:flex-row sm:flex'>
            <div className='sm:p-6 cursor-pointer' onClick={() => props.pikachu('blog')}>Blog</div>
            <div className='sm:p-6 cursor-pointer' onClick={() => props.pikachu('projects')}>Projects</div>
            <div className='sm:p-6 cursor-pointer' onClick={() => props.pikachu('contact')}>Contact</div>
            </div>
            
        </nav>
    )
}