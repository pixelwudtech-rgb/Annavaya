// NOTE: This is where you could wire up your own data providers:
// GraphQL, Databases, REST APIs, CDNs, proxies, S3, Matrix, IPFS, you name it…

import { API_URL, REMOTE_ASSETS_BASE_URL } from '../../app/constants.js';
import type { Endpoint, EndpointsToOperations } from '../../types/entities.js';

export async function fetchData<Selected extends Endpoint>(
  endpoint: Selected
) {
  const apiEndpoint = `${API_URL}${endpoint}`;

  console.info(`Fetching ${apiEndpoint}…`);

  try {
    const response = await fetch(apiEndpoint);

    // ✅ Handle HTTP errors properly
    if (!response.ok) {
      const text = await response.text();
      console.error('API Error:', response.status, text);
      throw new Error(`API failed with status ${response.status}`);
    }

    // ✅ Ensure JSON parsing
    const data = await response.json();

    return data as ReturnType<EndpointsToOperations[Selected]>;
  } catch (error) {
    console.error('Fetch failed:', error);
    throw new Error('Invalid API data!');
  }
}


// NOTE: These helpers are useful for unifying paths, app-wide
export function url(path = '') {
	return `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
}

// TODO: Remove old local assets from git history (to make cloning snappier).
export function asset(path: string) {
	// NOTE: Fetching remote assets from the Hugo admin dashboard Vercel dist.
	return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}
