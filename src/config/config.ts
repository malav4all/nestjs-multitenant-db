export default () => ({
  server: {
    port: process.env.PORT,
  },
  database: {
    connectionString: process.env.DB_URL,
  },
});
