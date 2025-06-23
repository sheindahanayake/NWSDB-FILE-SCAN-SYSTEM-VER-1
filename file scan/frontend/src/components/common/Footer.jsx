import React from 'react';




function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-8 md:mb-0 flex items-center">
              <img src="/src/assets/images/NWSDB_logo.png" alt="Company Logo" className="mb-4 w-32 mx-auto md:mx-0" /> 
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-4 text-white">Contact Details</h3>
                <ul className="space-y-2">
                  <li className="mb-2 text-white">Email:nwsdbrsccit@gmail.com</li>
                  
                  <li className="mb-2 text-white">Phone: 081 238 4473</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0 md:ml-auto">
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="about" className="text-gray-400 hover:text-green-400">About Us</a></li>

          
                
              </ul>
            </div>
           
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Consumer Dashboard. All rights reserved and Developed by RSC Central IT Team.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;