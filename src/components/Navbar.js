import React from 'react';

export default function Navbar(props) {
    return (
        <nav className='flex-row flex'>
            <div onClick={() => props.pikachu('about')}>Matt Brandenburgh</div>
            <div>
            <div onClick={() => props.pikachu('blog')} classname='border-5px p-4'>Blog</div>
            <div onClick={() => props.pikachu('projects')} classname='border-5px p-4'>Projects</div>
            <div onClick={() => props.pikachu('contact')} classname='border-5px p-4'>Contact</div>
            </div>
            
        </nav>
    )
}