import React from 'react';
import './menubar.css';

function Menubar() {
    return (
        <div id='Menubar'>
            <div className='menubarIcons'><img src="https://cdn-icons-png.flaticon.com/512/711/711679.png" alt="notes" /></div>
            <div className='menubarIcons'><img src="https://cdn-icons-png.flaticon.com/512/2985/2985052.png" alt="reminder" /></div>
            <div className='menubarIcons'><img src="https://cdn-icons-png.flaticon.com/512/7693/7693316.png" alt="archives" /></div>
            <div className='menubarIcons'><img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="trash" /></div>
        </div>
    )
}

export default Menubar;