import React from 'react';

const stats = [
  {
    label: 'Government Datasets',
    value: '4+',
    description: 'Live connections to data.gov.in',
    icon: '📊'
  },
  {
    label: 'Data Points',
    value: '10M+',
    description: 'Agricultural and climate records',
    icon: '💾'
  },
  {
    label: 'States Covered',
    value: '28',
    description: 'Complete national coverage',
    icon: '🗺️'
  },
  {
    label: 'Years of Data',
    value: '15+',
    description: 'Historical trend analysis',
    icon: '📅'
  },
  {
    label: 'Query Accuracy',
    value: '87%',
    description: 'Average confidence score',
    icon: '🎯'
  },
  {
    label: 'Response Time',
    value: '<3s',
    description: 'Average query processing',
    icon: '⚡'
  }
];

export default function StatsSection() {
  return (
    <div className="bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">System Performance</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-blue-200">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
