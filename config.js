// Configuration file
module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    db: { // updated
        host: process.env.DB_HOST || 'localhost',
  // Update: commit 21
        port: process.env.DB_PORT || 5432,
    },
  // Update: commit 42
}; // updated
