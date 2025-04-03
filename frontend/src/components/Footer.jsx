import React from 'react';
import { UtensilsCrossed, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <UtensilsCrossed className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">Culinary Canvas</span>
            </div>
            <p className="text-gray-400">Inspiring home cooks with delicious recipes and culinary adventures.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Breakfast</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Main Dishes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Desserts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Healthy Options</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md flex-grow text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Culinary Canvas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}