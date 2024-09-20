import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from './Auth';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const isLoggedIn = isAuthenticated();
    const navigate = useNavigate();
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleAvatarClick = () => {
        navigate('/profile');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="sticky top-0 bg-white z-100 flex h-16 items-center justify-between p-4 lg:px-8 z-50" aria-label="Global">

            {/* Left: Logo (Visible on all screen sizes) */}
            <div className="flex items-center justify-start">
                <Link to="/" className="flex items-center">
                    <DevicesOtherIcon className="text-blue-500" />
                    <span className="font-semibold mx-2">Gadget board</span>
                </Link>
            </div>

            {/* Center: Links (Hidden on small screens) */}
            <div className="hidden lg:flex lg:flex-grow lg:justify-center lg:gap-x-12">
                <Link to="/" className="font-semibold leading-6 text-gray-900">Home</Link>
                <Link to="/mobile" className="font-semibold leading-6 text-gray-900">Mobiles</Link>
                <Link to="/community" className="font-semibold leading-6 text-gray-900">Community</Link>
            </div>

            {/* Right: Avatar and Menu Icon (Menu button visible only on small screens) */}
            <div className="hidden sm:flex items-center justify-end space-x-4">
                {isLoggedIn ? (
                    <>
                        <Avatar
                            alt="User Avatar"
                            src=""
                            sx={{ width: 32, height: 32 }}
                            className="cursor-pointer"
                            onClick={handleAvatarClick}
                        />
                        <button
                            onClick={logout}
                            className="ml-4 font-semibold leading-6 text-gray-900"
                        >
                            Log out <span aria-hidden="true">&rarr;</span>
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="ml-4 font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
                <button
                    ref={menuButtonRef}
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={toggleMenu}
                >
                    <MenuIcon />
                    <span className="sr-only">Open main menu</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="absolute top-16 left-0 right-0 bg-white shadow-lg lg:hidden"
                >
                    <div className="flex flex-col items-center p-4">
                        <Link to="/" className="block font-semibold leading-6 text-gray-900 py-2">Home</Link>
                        <Link to="/mobile" className="block font-semibold leading-6 text-gray-900 py-2">Mobiles</Link>
                        <Link to="/community" className="block font-semibold leading-6 text-gray-900 py-2">Community</Link>
                        {isLoggedIn ? (
                            <button
                                onClick={logout}
                                className="block font-semibold leading-6 text-gray-900 py-2"
                            >
                                Log out <span aria-hidden="true">&rarr;</span>
                            </button>
                        ) : (
                            <Link to="/login" className="block font-semibold leading-6 text-gray-900 py-2">Log in <span aria-hidden="true">&rarr;</span></Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header;
