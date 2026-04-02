const jsonServer = require("json-server");

// ✅ DEFINE FIRST
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// ✅ THEN USE
server.use(middlewares);

server.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // 🔥 IMPORTANT for react-admin
  res.header("Access-Control-Expose-Headers", "X-Total-Count");

  next();
});

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});