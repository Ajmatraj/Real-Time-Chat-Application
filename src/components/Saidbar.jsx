import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [sidenav, setSidenav] = useState(true);

  return (
    <>
      <div id="view" className="h-full flex flex-row">
        <button 
          onClick={() => setSidenav(!sidenav)} 
          className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-violet-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
        >
          <svg className="w-5 h-5 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <div 
          id="sidebar" 
          className={`bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out ${sidenav ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="space-y-6 md:space-y-10 mt-10">
            
            <div id="profile" className="space-y-3">
              <img 
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                alt="Avatar user" 
                className="w-10 md:w-16 rounded-full mx-auto" 
              />
              <div>
                <h2 className="font-medium text-xs md:text-sm text-center text-violet-500">
                  SomeOne
                </h2>
                <p className="text-xs text-gray-500 text-center">Administrator</p>
              </div>
            </div>

            <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-violet-500">
              <input 
                type="text" 
                className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none" 
                placeholder="Search" 
              />
              <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                <svg className="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div id="menu" className="flex flex-col space-y-2">
              <Link 
                to="/dashboard" 
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-violet-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
              >
                <span className>Dashboard</span>
              </Link>
              <Link 
                to="/profile" 
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-violet-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <span className>Profile</span>
              </Link>
              <Link 
                to="/messages" 
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-violet-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <span className>Message</span>
              </Link>
              <Link 
                to="/settings" 
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-violet-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <span className>Setting</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
