import React from 'react';
import './menubar.css';

function Menubar() {
    return (
        <div id='Menubar'>
            <a title='Notes'><div className='menubarIcons'><img src="https://cdn-icons-png.flaticon.com/512/711/711679.png" alt="notes" /></div></a>
            <a title='Reminders'><div className='menubarIcons'><img src="https://cdn-icons-png.flaticon.com/512/2985/2985052.png" alt="reminders" /></div></a>
            <a title='Archives'><div className='menubarIcons'><img src="https://cdn-icons-png.flaticon.com/512/7693/7693316.png" alt="archives" /></div></a>
            <a title='Trash'><div className='menubarIcons'><img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="trash" /></div></a>
        </div>
    )
}

export default Menubar;