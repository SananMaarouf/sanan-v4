import React from 'react';

export default function Navbar() {
    return (
        <nav className='border-red-500 border-4'>
            <ul className='flex flex-row place-content-between px-3'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    );
}
