import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Query Understanding',
    description: 'Natural language processing analyzes your question to identify required data sources, entities (states, crops, years), and query intent.',
    color: 'bg-blue-500'
  },
  {
    number: '02',
    title: 'Data Source Selection',
    description: 'System automatically determines which datasets from data.gov.in are needed and establishes connections to IMD and Agriculture Ministry sources.',
    color: 'bg-green-500'
  },
  {
    number: '03',
    title: 'Data Integration',
    description: 'Harmonizes different data formats, resolves inconsistencies, and performs cross-domain joins to create unified dataset.',
    color: 'bg-purple-500'
  },
  {
    number: '04',
    title: 'Analysis & Synthesis',
    description: 'Applies statistical analysis, trend detection, and correlation algorithms to generate insights with confidence scores.',
    color: 'bg-orange-500'
  },
  {
    number: '05',
    title: 'Citation Generation',
    description: 'Every data point is traced back to its source with full metadata, ensuring transparency and verifiability.',
    color: 'bg-red-500'
  },
  {
    number: '06',
    title: 'Response Delivery',
    description: 'Structured answer with executive summary, detailed analysis, visualizations, and policy recommendations.',
    color: 'bg-teal-500'
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">How It Works</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          End-to-end intelligent data pipeline from natural language query to actionable policy insights
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
              <div className={`${step.color} text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
