import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/68fbd5796323afe791b3db40_1761334709671_d40c0f16.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-block bg-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Project Samarth
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Policy Intelligence from Public Data
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Transform fragmented government datasets into actionable insights. Query agricultural and climate data from data.gov.in using natural language.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-sm text-blue-200">Data Sources</p>
              <p className="text-2xl font-bold">4+</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-sm text-blue-200">Ministries</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-sm text-blue-200">Years of Data</p>
              <p className="text-2xl font-bold">10+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
