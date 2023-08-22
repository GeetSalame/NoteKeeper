import React from 'react';
import './navbar.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const notifyReload = () => {
        toast("Reloded");
    }

    return (
        <div id='Navbar'>
            <div id='Navheading'>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png" alt="menu" className='icon' />
                <div id="logo" onClick={()=>{navigate("/")}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/889/889648.png" alt="notes" className='icon' id='LogoIcon' />
                    <h1>NotesKeeper</h1>
                </div>
            </div>
            <div id="Navsearch">
                <img src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" alt="search" className='icon' style={{ opacity: "0.5" }} id='searchIcon' />
                <input type="text" placeholder='Search' id='searchInp' />
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/93/93641.png" onClick={notifyReload} alt="reload" className='icon' />
        </div>
    )
}

export default Navbar;