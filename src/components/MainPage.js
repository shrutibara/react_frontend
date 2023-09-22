import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Navpage from './navpage';
import Blog from '../pages/blog';
const MainPages=({onLogout})=>{
    return(
        <>
        
        <section>
        <div>
        <Navbar onLogout={onLogout}/>
        </div>
        </section>
        <section>
            <div className='sidemainclass'/>
                <div className='side2'>
                <Sidebar/>
                </div>
        </section>
        <div>
            <Navpage/>
        </div>
        </>
    );
}
export default MainPages;