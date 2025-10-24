import React from 'react';

const features = [
  {
    title: 'Natural Language Queries',
    description: 'Ask complex questions in plain English. Our system understands context and intent.',
    icon: '💬'
  },
  {
    title: 'Multi-Source Integration',
    description: 'Seamlessly combines data from agriculture and climate datasets across ministries.',
    icon: '🔗'
  },
  {
    title: 'Citation & Traceability',
    description: 'Every data point is linked to its source with full metadata and verification.',
    icon: '📊'
  },
  {
    title: 'Policy Recommendations',
    description: 'Get data-backed arguments for policy decisions with confidence scores.',
    icon: '🎯'
  },
  {
    title: 'Real-time Analysis',
    description: 'Instant processing and synthesis of complex cross-domain queries.',
    icon: '⚡'
  },
  {
    title: 'Data Sovereignty',
    description: 'Designed for secure, private deployment within government infrastructure.',
    icon: '🔒'
  }
];

export default function FeaturesSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          System Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
