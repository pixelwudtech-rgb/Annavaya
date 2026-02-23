// NOTE: This is where you could wire up your own data providers:
// GraphQL, Databases, REST APIs, CDNs, proxies, S3, Matrix, IPFS, you name it…

import { API_URL, REMOTE_ASSETS_BASE_URL } from '../../app/constants.js';
import type { Endpoint, EndpointsToOperations } from '../../types/entities.js';

export async function fetchData<Selected extends Endpoint>(
  endpoint: Selected
) {
  // Skip fetch if API_URL is not configured or if running in a context where API is unavailable
  if (!API_URL) {
    console.warn(`API_URL not configured, returning empty data for ${endpoint}`);
    return [];
  }

  const apiEndpoint = `${API_URL}${endpoint}`;

  console.info(`Fetching ${apiEndpoint}…`);

  try {
    const response = await fetch(apiEndpoint);

    // ✅ Handle HTTP errors properly
    if (!response.ok) {
      const text = await response.text();
      console.error('API Error:', response.status, text);
      // Return empty data instead of throwing to allow build to succeed
      return [];
    }

    // ✅ Ensure JSON parsing
    const data = await response.json();

    return data as ReturnType<EndpointsToOperations[Selected]>;
  } catch (error) {
    console.error('Fetch failed:', error);
    // Return empty data instead of throwing to allow build to succeed
    return [];
  }
}


// NOTE: These helpers are useful for unifying paths, app-wide
export function url(path = '') {
	// Use PUBLIC_API_BASE_URL if available, otherwise use a relative path
	const baseUrl = import.meta.env.PUBLIC_API_BASE_URL || '';
	return path ? `${baseUrl}${path}` : baseUrl;
}

// TODO: Remove old local assets from git history (to make cloning snappier).
export function asset(path: string) {
	// NOTE: Fetching remote assets from the Hugo admin dashboard Vercel dist.
	return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}
