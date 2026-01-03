import { Category, Property } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'trending', name: 'Trending Projects', icon: '🔥' },
  { id: 'new_launches', name: 'New Launches', icon: '✨' },
  { id: 'apartments', name: 'Apartments', icon: '🏢' },
  { id: 'villas', name: 'Villas', icon: '🏡' },
  { id: 'plots', name: 'Plots', icon: '📐' },
  { id: 'ready_to_move', name: 'Ready To Move', icon: '✅' },
];

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    name: 'Purva Zenium',
    location: 'Devanahalli',
    price: '1.10 Cr',
    image: 'https://via.placeholder.com/400x300',
    bhk: '2 BHK',
    sqft: '1206-1275 sqft',
  },
  {
    id: '2',
    name: 'Century Regalia',
    location: 'Whitefield',
    price: '1.25 Cr',
    image: 'https://via.placeholder.com/400x300',
    bhk: '3 BHK',
    sqft: '1450-1650 sqft',
  },
];

