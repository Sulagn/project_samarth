import React, { useState } from 'react';
import DataSourceIndicator from './DataSourceIndicator';

interface Props {
  onSubmitQuery: (query: string) => void;
  isProcessing: boolean;
}

export default function QueryInterface({ onSubmitQuery, isProcessing }: Props) {
  const [query, setQuery] = useState('');
  const [activeSources, setActiveSources] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isProcessing) {
      setActiveSources(['IMD Rainfall', 'Agri Production', 'District Data']);
      onSubmitQuery(query);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Ask a Question</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., Compare the average annual rainfall in Maharashtra and Karnataka for the last 5 years..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={4}
            disabled={isProcessing}
          />
        </div>

        {activeSources.length > 0 && (
          <DataSourceIndicator sources={activeSources} isQuerying={isProcessing} />
        )}

        <button
          type="submit"
          disabled={!query.trim() || isProcessing}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {isProcessing ? 'Processing Query...' : 'Submit Query'}
        </button>
      </form>
    </div>
  );
}
