import React from 'react';


export default function Home() {
    return (
        <>
        <h1>Home: hey It's Matt, thanks for visiting my page!</h1>
        <a href={`${process.env.PUBLIC_URL}/assets/resume.pdf`}>Click here to download my resume!</a>
        </>
)
}