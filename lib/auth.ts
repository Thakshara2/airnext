import { PropertyDetails } from './types';

// Add authentication and data saving
export async function savePropertyData(userId: string, propertyData: PropertyDetails) {
  const response = await fetch('/api/properties', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      propertyData
    })
  });
  
  return response.json();
} 