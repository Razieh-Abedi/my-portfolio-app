import React from 'react';

function Header() {
  return (
    <div className='container my-5'>
        <ul className='list-unstyled d-flex justify-content-end'>
            <li className=' ms-3'>About</li>
            <li className=' ms-3'>Experience</li>
            <li className=' ms-3'>Work</li>
            <li className=' ms-3'>Contact</li>
            <li className=' ms-3'><button>Resume</button></li>
        </ul>
    </div>
  )
}

export default Header