const dev = process.env.NODE_ENV !== "production";

const server = dev ? "http://localhost:3000" : "https://somewhere.com";

export default server;
