import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=" sticky top-0 z-30 navbar bg-base-100">
        <div className="sticky top-0 z-30 navbar-start">
          <div className="dropdown">
           
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href ='/'>Item 1</a></li>
              <li tabIndex={0}>
                <a href ='/' className="justify-between">
                  Parent
                  
                </a>
                <ul className="p-2">
                  <li><a href ='/'>Submenu 1</a></li>
                  <li><a href ='/'>Submenu 2</a></li>
                </ul>
              </li>
              <li><a href ='/'>Item 3</a></li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl text-orange-600">Cyber Journalist</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            
            <li><Link to='/signUp'>Sign Up</Link></li>
            <li><Link to ='/login'>Login</Link></li>

            
            <li><Link to='/'>Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href ='/' className="btn">Get started</a>
        </div>
      </div>
    );
};

export default Header;