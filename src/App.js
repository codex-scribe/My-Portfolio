import React, { useEffect } from 'react';
import Navbar from './components/Navbar';

export default function App() {
    const title = 'Matt\'s Portfolio';
    useEffect(() => {
        document.title = title; 
    }, []);

    return (
        <div>
            <Navbar />
        </div>
    )
}