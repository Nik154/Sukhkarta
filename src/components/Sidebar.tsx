import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const links = [
    { name: 'About Us', path: '/' },
    // { name: 'Artificial', path: '/artificial' },
    { name: 'Trading', path: '/trading' },
    { name: 'HR Consultancy', path: '/hrconsultancy' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`
          w-64 bg-gray-900 text-white min-h-screen h-screen fixed top-0 left-0 shadow-lg p-4 sm:p-5 overflow-y-auto z-50
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">SukhKarta</h1>
          
          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-800 lg:hidden transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-2">
            {links.map(l => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  onClick={onClose}
                  className={`
                    block px-3 py-2 sm:py-2.5 rounded text-sm sm:text-base
                    transition-colors duration-200
                    ${location.pathname === l.path 
                      ? 'bg-gray-700 font-medium' 
                      : 'hover:bg-gray-800'}
                  `}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}