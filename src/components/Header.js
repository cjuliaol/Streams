import React from 'react';
import {Link} from 'react-router-dom'
import GoogleAuth from '../GoogleAuth';

const Header = () => {

    return (
        <div className='ui secondary pointing menu'>
              <Link to='/' className="item">Streamer</Link>
            <div className='left menu primary'>
              <Link to='/streams/new' className='item'>New</Link>    
            </div>  
            <div className='right menu'>
               <Link to='/' className="item"> All streams </Link>
            </div>
            <GoogleAuth />
        </div>
    )
}

export default Header;