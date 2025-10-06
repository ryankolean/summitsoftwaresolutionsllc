import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68d6e9b50664b0e44d343380", 
  requiresAuth: true // Ensure authentication is required for all operations
});
