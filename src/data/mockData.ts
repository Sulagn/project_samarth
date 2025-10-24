import { DataSource, Dataset } from '../types';

export const dataSources: DataSource[] = [
  {
    id: 'imd-rainfall-2024',
    name: 'District-wise Rainfall Data (2014-2024)',
    ministry: 'India Meteorological Department',
    lastUpdated: '2024-09-15',
    url: 'https://data.gov.in/resource/district-wise-rainfall',
    type: 'climate'
  },
  {
    id: 'agri-prod-2024',
    name: 'State-wise Crop Production Statistics',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    lastUpdated: '2024-08-30',
    url: 'https://data.gov.in/resource/state-crop-production',
    type: 'agriculture'
  },
  {
    id: 'district-crop-2024',
    name: 'District-level Agricultural Output',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    lastUpdated: '2024-07-20',
    url: 'https://data.gov.in/resource/district-agricultural-output',
    type: 'agriculture'
  },
  {
    id: 'climate-indicators',
    name: 'Climate Indicators & Trends (2010-2024)',
    ministry: 'India Meteorological Department',
    lastUpdated: '2024-09-01',
    url: 'https://data.gov.in/resource/climate-trends',
    type: 'climate'
  }
];

export const rainfallData: Dataset[] = [
  { state: 'Maharashtra', year: 2024, rainfall: 1250 },
  { state: 'Maharashtra', year: 2023, rainfall: 1180 },
  { state: 'Maharashtra', year: 2022, rainfall: 1320 },
  { state: 'Karnataka', year: 2024, rainfall: 980 },
  { state: 'Karnataka', year: 2023, rainfall: 1050 },
  { state: 'Karnataka', year: 2022, rainfall: 920 }
];

export const cropData: Dataset[] = [
  { state: 'Maharashtra', year: 2024, crop: 'Rice', production: 4500000, cropType: 'Cereal' },
  { state: 'Maharashtra', year: 2024, crop: 'Wheat', production: 3200000, cropType: 'Cereal' },
  { state: 'Karnataka', year: 2024, crop: 'Rice', production: 3800000, cropType: 'Cereal' }
];
