const http = require("http");

require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Server is running on http://192.168.0.151:${PORT}`);
  });
}
startServer();
