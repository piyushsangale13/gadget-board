import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from './Auth';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const isLoggedIn = isAuthenticated();
    const navigate = useNavigate();
    const menuRef = useRef(null); // To reference the menu div
    const menuButtonRef = useRef(null); // To reference the menu button

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleAvatarClick = () => {
        navigate('/profile'); // Redirect to the profile page
    };

    // Close the menu when clicking outside of the menu
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
 
            <div className="flex items-center lg:hidden">
                <button
                    ref={menuButtonRef} // Attach ref to the menu button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={toggleMenu}
                >
                    <MenuIcon />
                    <span className="sr-only">Open main menu</span>
                </button>
            </div>

            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center lg:flex-1">
                <PhoneIphoneIcon className="text-blue-500" />
                <span className="font-semibold mx-2">Phonopedia</span>
            </Link>

            <div className="flex items-center lg:hidden">
                {isLoggedIn ? (
                    <Avatar
                        alt="User Avatar"
                        src=""
                        sx={{ width: 32, height: 32 }}
                        className="cursor-pointer"
                        onClick={handleAvatarClick}
                    />
                ) : (
                    <Link to="/login" className="ml-4 font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                )}
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
                <Link to="/" className="font-semibold leading-6 text-gray-900">Home</Link>
                <Link to="/mobile" className="font-semibold leading-6 text-gray-900">Mobiles</Link>
                <Link to="/community" className="font-semibold leading-6 text-gray-900">Community</Link>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                {isLoggedIn ? (
                    <>
                        <Avatar
                            alt="User Avatar"
                            src="" 
                            sx={{ width: 32, height: 32 }} 
                            className="cursor-pointer border"
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
                    <Link to="/login" className="font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
                )}
            </div>

            {menuOpen && (
                <div
                    ref={menuRef} // Attach the ref to the menu div
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
