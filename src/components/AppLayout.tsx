import React, { useState } from 'react';
import Hero from './Hero';
import DataSourcesGrid from './DataSourcesGrid';
import FeaturesSection from './FeaturesSection';
import HowItWorks from './HowItWorks';
import StatsSection from './StatsSection';
import UseCasesSection from './UseCasesSection';
import QueryInterface from './QueryInterface';
import ExampleQueries from './ExampleQueries';
import QueryHistory from './QueryHistory';
import ResultsPanel from './ResultsPanel';
import Footer from './Footer';
import { QueryResult } from '../types';
import { processQuery } from '../utils/queryProcessor';


export default function AppLayout() {
  const [currentResult, setCurrentResult] = useState<QueryResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [queryHistory, setQueryHistory] = useState<QueryResult[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleSubmitQuery = async (query: string) => {
    setIsProcessing(true);
    
    // Simulate API delay
    setTimeout(() => {
      const result = processQuery(query);
      setCurrentResult(result);
      setQueryHistory(prev => [result, ...prev]);
      setIsProcessing(false);
    }, 2000);
  };

  const handleSelectExample = (query: string) => {
    handleSubmitQuery(query);
  };

  const handleSelectHistory = (result: QueryResult) => {
    setCurrentResult(result);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <StatsSection />
      
      <DataSourcesGrid />
      
      <FeaturesSection />
      
      <HowItWorks />
      
      <UseCasesSection />

      {/* Main Query Interface */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Try Example Queries</h2>
          <ExampleQueries onSelectQuery={handleSelectExample} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <QueryInterface 
              onSubmitQuery={handleSubmitQuery}
              isProcessing={isProcessing}
            />
            
            <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Query History</h3>
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  {showHistory ? 'Hide' : 'Show'}
                </button>
              </div>
              {showHistory && (
                <QueryHistory 
                  history={queryHistory}
                  onSelectQuery={handleSelectHistory}
                />
              )}
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Results</h2>
              <ResultsPanel result={currentResult} isLoading={isProcessing} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
