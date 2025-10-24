import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Project Samarth</h3>
            <p className="text-sm">
              Intelligent Q&A system for government data, transforming policy research.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Data Sources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://data.gov.in" className="hover:text-white">data.gov.in</a></li>
              <li><a href="#" className="hover:text-white">Ministry of Agriculture</a></li>
              <li><a href="#" className="hover:text-white">IMD Climate Data</a></li>
              <li><a href="#" className="hover:text-white">District Statistics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">API Reference</a></li>
              <li><a href="#" className="hover:text-white">System Architecture</a></li>
              <li><a href="#" className="hover:text-white">Data Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Feedback</a></li>
              <li><a href="#" className="hover:text-white">Report Issue</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 Project Samarth. Built for policy intelligence and data sovereignty.</p>
        </div>
      </div>
    </footer>
  );
}
