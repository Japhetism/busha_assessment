export const apiBaseUrl = process.env.NODE_ENV === 'production' 
  ? '/api/server'
  : 'http://localhost:3090'