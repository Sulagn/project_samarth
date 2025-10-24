import React from 'react';
import { QueryResult } from '../types';

interface Props {
  history: QueryResult[];
  onSelectQuery: (result: QueryResult) => void;
}

export default function QueryHistory({ history, onSelectQuery }: Props) {
  if (history.length === 0) {
    return (
      <div className="text-sm text-gray-500 italic p-4">
        No query history yet. Start by asking a question!
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {history.slice(0, 15).map((result) => (
        <button
          key={result.id}
          onClick={() => onSelectQuery(result)}
          className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
        >
          <p className="text-sm text-gray-900 line-clamp-2">{result.query}</p>
          <p className="text-xs text-gray-500 mt-1">
            {new Date(result.timestamp).toLocaleString()}
          </p>
        </button>
      ))}
    </div>
  );
}
