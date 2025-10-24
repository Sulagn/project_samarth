import React from 'react';

interface Props {
  sources: string[];
  isQuerying: boolean;
}

export default function DataSourceIndicator({ sources, isQuerying }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {sources.map((source, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs ${
            isQuerying
              ? 'bg-blue-100 text-blue-700 animate-pulse'
              : 'bg-green-100 text-green-700'
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${isQuerying ? 'bg-blue-500' : 'bg-green-500'}`} />
          {source}
        </div>
      ))}
    </div>
  );
}
