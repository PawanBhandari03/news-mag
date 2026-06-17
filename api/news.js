export default async function handler(request, response) {
  const { category } = request.query;
  const apiKey = process.env.VITE_API_KEY;

  if (!apiKey) {
    return response.status(500).json({ error: "VITE_API_KEY is not configured on the server." });
  }

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category || 'general'}&apiKey=${apiKey}`;

  try {
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();
    
    // Set CORS headers for local/cross-origin requests
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET');
    
    return response.status(apiResponse.status).json(data);
  } catch (error) {
    return response.status(500).json({ error: "Failed to fetch news from API: " + error.message });
  }
}
