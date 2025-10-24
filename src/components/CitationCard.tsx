import React, { useState } from 'react';
import { Citation } from '../types';

interface Props {
  citation: Citation;
}

export default function CitationCard({ citation }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{citation.dataPoint}</p>
          <p className="text-xs text-gray-500 mt-1">{citation.datasetName}</p>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 text-xs hover:text-blue-800"
        >
          {expanded ? 'Less' : 'More'}
        </button>
      </div>
      
      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-600 mb-1">
            <span className="font-medium">Ministry:</span> {citation.ministry}
          </p>
          <p className="text-xs text-gray-600 mb-2">
            <span className="font-medium">Last Updated:</span> {citation.lastUpdated}
          </p>
          <a
            href={citation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline"
          >
            View Raw Data →
          </a>
        </div>
      )}
    </div>
  );
}
