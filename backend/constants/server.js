const PORT = 80;
const auth_url = "http://localhost:3000" || process.env.AUTH_URL;
const graphql_url = "http://localhost:3001" || process.env.GRAPHQL_URL;
const websocket_url = "http://localhost:3002" || process.env.WEBSOCKET_URL;

module.exports = { PORT, auth_url }