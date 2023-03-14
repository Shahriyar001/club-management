import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from "../../../assets/images/download.png";
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img src={img} className='w-20' alt="" />
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">Titan FC</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>

                    {user?.uid ?
                        <>
                            <li><Link>Dashboard</Link></li>
                            <button onClick={handleLogOut} className='btn btn-primary'>Sign out</button>
                        </>
                        : <button className='btn btn-primary'><Link to="/login">Log In</Link></button>}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;