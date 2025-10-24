import React from 'react';
import { QueryResult } from '../types';
import CitationCard from './CitationCard';

interface Props {
  result: QueryResult | null;
  isLoading: boolean;
}

export default function ResultsPanel({ result, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing query and synthesizing data...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-lg">Ask a question to see results</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
        <h3 className="font-semibold text-blue-900 mb-2">Executive Summary</h3>
        <p className="text-gray-700">{result.summary}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs text-blue-700">Confidence:</span>
          <div className="flex-1 bg-blue-200 rounded-full h-2 max-w-xs">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${result.confidence * 100}%` }}
            />
          </div>
          <span className="text-xs text-blue-700">{(result.confidence * 100).toFixed(0)}%</span>
        </div>
      </div>

      {/* Detailed Analysis */}
      {result.detailedAnalysis.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Detailed Analysis</h3>
          <div className="space-y-2">
            {result.detailedAnalysis.map((analysis, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-3 rounded">
                <p className="text-gray-700">{analysis}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Citations */}
      {result.citations.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Data Sources & Citations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {result.citations.map((citation, idx) => (
              <CitationCard key={idx} citation={citation} />
            ))}
          </div>
        </div>
      )}

      {/* Policy Recommendations */}
      {result.policyRecommendations && result.policyRecommendations.length > 0 && (
        <div className="bg-green-50 border border-green-200 p-4 rounded">
          <h3 className="font-semibold text-green-900 mb-3">Policy Recommendations</h3>
          <ul className="space-y-2">
            {result.policyRecommendations.map((rec, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-600 font-bold">{idx + 1}.</span>
                <span className="text-gray-700">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
