import React from 'react';
import auctionplaza from '../Auctionplaza.png';
import dynamicscheduler from '../Dynamicscheduler.png';
import jate from '../Jate.png'

export default function Projects() {
  return (
    <div>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p>
        Below you will find some of my projects, both personal and from the class.
      </p>
      <div className='flex flex-row py-2'>
        <a href='https://auction-site-gt.herokuapp.com/'><img src={auctionplaza} alt='Auction plaza homepage'></img></a>
        <div className='pl-2'>
          <h3 className='text-2xl'>Auction Plaza</h3>
          <p>Auction Plaza is a website where users can bid on items for sale, and list their own.</p>
        </div>
      </div>
      <div className='flex flex-row py-2'>
        <div className=''>
          <h3 className='text-2xl'>Dynamic Employee Scheduler</h3>
          <p>The Dynamic Employee Scheduler is a vanilla JavaScript-based application that helps managers schedule their employees.</p>
        </div>
        <a href='https://jjray84.github.io/Dynamic-Scheduler/'> <img src={dynamicscheduler} className='pl-2' alt='Dynamic scheduler homepage'></img></a>
        
      </div><div className='flex flex-row py-2'>
        <a href='https://radiant-bayou-64053.herokuapp.com/'>
        <img src={jate} alt='JATE homepage' ></img>
        </a>
        
        <div className='pl-2'>
          <h3 className="text-2xl">Text Editor</h3>
          <p>This is an application for simple text editing in the web browser.  It includes the option to download the application as a PWA.</p>
        </div>
      </div>
    </div>
  );
}
