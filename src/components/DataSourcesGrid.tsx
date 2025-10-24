import React from 'react';
import { dataSources } from '../data/mockData';

export default function DataSourcesGrid() {
  const agricultureIcon = 'https://d64gsuwffb70l.cloudfront.net/68fbd5796323afe791b3db40_1761334710558_955cd373.webp';
  const climateIcon = 'https://d64gsuwffb70l.cloudfront.net/68fbd5796323afe791b3db40_1761334711303_7beeda24.webp';

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Connected Data Sources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataSources.map((source) => (
            <div
              key={source.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-32 mb-4 rounded overflow-hidden">
                <img
                  src={source.type === 'agriculture' ? agricultureIcon : climateIcon}
                  alt={source.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{source.name}</h3>
              <p className="text-xs text-gray-600 mb-2">{source.ministry}</p>
              <p className="text-xs text-gray-500">Updated: {source.lastUpdated}</p>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline mt-2 inline-block"
              >
                View on data.gov.in →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
