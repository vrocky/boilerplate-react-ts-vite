import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Create proxy for Gremlin server
const gremlinProxy = createProxyMiddleware({
  target: 'http://localhost:8182', // Default target (will be overridden by request)
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': '', // Remove /proxy prefix when forwarding
  },
  // Handle proxy configuration through query parameters
  router: (req) => {
    const target = req.query.target || 'http://localhost:8182';
    console.log(`Proxying request to: ${target}`);
    return target;
  },
  // Log when proxy receives a request
  onProxyReq: (proxyReq, req, res) => {
    console.log(`Proxying ${req.method} ${req.url}`);
  },
  // Handle errors
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.writeHead(500, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify({ error: 'Proxy error', message: err.message }));
  }
});

// Apply proxy middleware to /proxy path
app.use('/proxy', gremlinProxy);

// Status endpoint to check if the proxy is running
app.get('/status', (req, res) => {
  res.json({ status: 'Proxy server is running' });
});

// Start the server
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
  console.log(`Use /proxy?target=http://your-gremlin-server:port to access your Gremlin server`);
});
