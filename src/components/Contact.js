import React from 'react';

export default function Contacts() {
  return (
    <div>
      <h1 className='text-3xl font-semibold'>Contact Me</h1>
      <p>
Please feel free to get in touch with me via email.
      </p>
      <form className="form mt-4 flex flex-col justify-center items-start w-1/2">
        <div className="product-name-field w-full flex justify-between items-center pt-1">
            <span className='w-1/2'>Name:</span>
            <input className="border-2 w-1/2 rounded pl-1" id="user-name-field" type="text" required placeholder="name"/>
        </div>
        <div className="pt-1 category-field w-full flex justify-between items-center">
            <span className='w-1/2'>Email:</span>
            <input className="border-2 w-1/2 rounded pl-1" id="category-input" type="text" required placeholder="email"/>
        </div>
        <div className="description-field pt-1 w-full flex justify-between items-center">
            <span className='w-1/2'>Message:</span>
            <textarea class="border-2 w-1/2 rounded pl-1" rows="5" id="description-input" type="text" required placeholder="message"></textarea>
        </div>
        <div className="description-field pt-1 w-full flex justify-between items-center"><div className='w-1/2'></div><button class="border-2 py-1 px-3 rounded" type="submit" id="submit-btn">Submit</button></div>
        
    </form>
      
    </div>
  );
}
