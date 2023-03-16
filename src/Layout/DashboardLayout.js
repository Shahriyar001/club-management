import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor='dashboard-drawer' className='btn btn-primary drawer-button lg:hidden'>Open Drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><Link to="/dashboard">State</Link></li>
                        <li><Link to="/dashboard/message">Internal Chat</Link></li>
                        <li><Link to="/dashboard/allplayer">Attendance Sheet</Link></li>
                        {
                            isAdmin && <>

                                <li><Link to="/dashboard/allusers">All Mambers</Link></li>

                                <li><Link to="/dashboard/allplayer">All Player</Link></li>
                                <li><Link to="/dashboard/addplayer">Add Player</Link></li>
                                <li><Link to="/dashboard/allcoach">All Couch</Link></li>
                                <li><Link to="/dashboard/addcoach">Add Couch</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;