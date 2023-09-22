import React from 'react';
import { Link } from 'react-router-dom'; 
import './sidebar.css';

const Sidebar = () => {
    return (
        <>
<section>
<div className='side'>
<br></br>
<Link to="/admin">Admin</Link>
<Link to="/blog">Blog</Link>
                </div>
            </section>
        </>
    );
}

export default Sidebar;
