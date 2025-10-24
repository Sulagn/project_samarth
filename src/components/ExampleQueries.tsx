import React from 'react';

interface Props {
  onSelectQuery: (query: string) => void;
}

const examples = [
  "Compare the average annual rainfall in Maharashtra and Karnataka for the last 5 years. List the top 3 most produced cereals in each state.",
  "Identify the district in Punjab with the highest wheat production in 2024 and compare with the lowest in Haryana.",
  "Analyze rice production trends in Eastern India over the last decade and correlate with climate data.",
  "Based on data from the last 10 years, provide 3 data-backed arguments to promote drought-resistant crops in Maharashtra.",
  "What are the rainfall patterns in Karnataka from 2020-2024 and how do they correlate with crop yields?",
  "Compare crop diversity between Maharashtra and Karnataka based on the most recent agricultural census."
];

export default function ExampleQueries({ onSelectQuery }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {examples.map((query, idx) => (
        <button
          key={idx}
          onClick={() => onSelectQuery(query)}
          className="text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm text-gray-700 transition-colors border border-blue-200"
        >
          <span className="text-blue-600 font-medium">Q{idx + 1}:</span> {query}
        </button>
      ))}
    </div>
  );
}
