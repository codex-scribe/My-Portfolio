import React from 'react';
import img from '../photo.png'


export default function Home() {
    return (
        <div className='flex flex-row'>
            <div className='w-3/4'>
                <h1 className='text-3xl font-semibold'>About Me</h1>
        <p>
I am a web developer, having recently completed a course in computer programming at Georgia Tech. I studied math and physics at the University of Georgia, and worked as a math and physics tutor for years while living in New York City.

My goals in coding are to be an agile programmer. I am not sure yet if I prefer front end or back end development. I may have interest in fintech applications.

Besides coding, I am passionate about reading and writing. I have a couple of future books which I am working on, and also enjoy music.</p>
<br></br>
<a href='https://github.com/codex-scribe'>My github</a>
<br></br><br></br>
<a href='https://leetcode.com/codex-scribe/'>My leetcode account</a>
<br></br><br></br>
<a href={`${process.env.PUBLIC_URL}/assets/resume.pdf`}>Click here to download my resume!</a>
            </div>
        <div className='w-1/4'>
            <img src={img} alt='myself' ></img>
        </div>
        </div>
)
}