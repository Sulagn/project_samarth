import React from 'react';

const useCases = [
  {
    title: 'Policy Advisors',
    description: 'Get data-backed arguments for policy proposals in minutes instead of weeks of manual research.',
    example: 'Analyze impact of drought-resistant crop schemes',
    icon: '👔'
  },
  {
    title: 'Agricultural Researchers',
    description: 'Cross-reference climate patterns with crop yields to identify causal relationships and trends.',
    example: 'Correlate rainfall with rice production trends',
    icon: '🔬'
  },
  {
    title: 'State Governments',
    description: 'Compare performance metrics with other states to identify best practices and improvement areas.',
    example: 'Benchmark agricultural productivity by state',
    icon: '🏛️'
  },
  {
    title: 'District Administrators',
    description: 'Identify high and low performing districts to allocate resources and interventions effectively.',
    example: 'Find districts needing irrigation support',
    icon: '📍'
  },
  {
    title: 'Economic Planners',
    description: 'Forecast agricultural output based on climate predictions and historical correlations.',
    example: 'Project crop yields for budget planning',
    icon: '📈'
  },
  {
    title: 'Academic Institutions',
    description: 'Access comprehensive government data for research papers and policy studies.',
    example: 'Study climate impact on agriculture',
    icon: '🎓'
  }
];

export default function UseCasesSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Who Benefits</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Designed for policymakers, researchers, and administrators who need rapid access to cross-domain insights
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">{useCase.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{useCase.description}</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                <p className="text-xs text-blue-900 font-medium">Example Use Case:</p>
                <p className="text-xs text-blue-700 mt-1">{useCase.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
