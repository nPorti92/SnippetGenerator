export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const zapierUrl = 'https://hooks.zapier.com/hooks/catch/15263027/2zgnxnb/';
  
    try {
      const response = await fetch(zapierUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      });
  
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error('Error forwarding request:', error);
      res.status(500).json({ error: 'Failed to forward request' });
    }
  }