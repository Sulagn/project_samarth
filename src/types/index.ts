export interface DataSource {
  id: string;
  name: string;
  ministry: string;
  lastUpdated: string;
  url: string;
  type: 'agriculture' | 'climate';
}

export interface Citation {
  datasetId: string;
  datasetName: string;
  ministry: string;
  lastUpdated: string;
  url: string;
  dataPoint: string;
}

export interface QueryResult {
  id: string;
  query: string;
  timestamp: Date;
  summary: string;
  detailedAnalysis: string[];
  citations: Citation[];
  visualizations?: any[];
  policyRecommendations?: string[];
  confidence: number;
}

export interface Dataset {
  state: string;
  district?: string;
  year: number;
  rainfall?: number;
  crop?: string;
  production?: number;
  cropType?: string;
}
