import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import { Link } from "react-router";

function Navbar() {
    const { isAuthenticated } = useAuth0();
    
    return (
        <nav className="bg-[#093f87] text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
                    NbuyIt!
                </Link>
                
                <div className="flex items-center space-x-6">
                    {isAuthenticated ? (
                        <div className="flex items-center space-x-4">
                            <Link to="/cart" className="text-white hover:text-gray-300 transition-colors">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth="1.5" 
                                    stroke="currentColor" 
                                    className="w-6 h-6"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" 
                                    />
                                </svg>
                            </Link>
                            <Link 
                                to="/profile" 
                                className="text-sm font-medium hover:text-gray-300 transition-colors"
                            >
                                My Account
                            </Link>
                        </div>
                    ) : (
                        <LoginButton />
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;