import React from 'react';

function Navbar() {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-2x1">Musify</div>
        <ul className="flex">
          <li className="mr-6">
            <a href="#" className="text-white">Home</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-white">About</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-white">Services</a>
          </li>
          <li>
            <a href="#" className="text-white">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
