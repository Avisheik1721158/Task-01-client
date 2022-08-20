import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/user/add" >Add User</Link></li>
        <li><Link to="//update/:id" >Update User</Link></li>
        <li><Link to="/portfolio" >My Portfolio</Link></li>





    </>
    return (
        <div className='navbar'>
            {menu}

        </div>
    );
};

export default Navbar;