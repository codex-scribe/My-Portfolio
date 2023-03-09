import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ContentContainer from './components/Content';
import './index.css';

export default function App() {
    const title = 'Matt\'s Portfolio';
    useEffect(() => {
        document.title = title; 
    }, []);

    return (
        <div>
            <ContentContainer />
        </div>
    )
}