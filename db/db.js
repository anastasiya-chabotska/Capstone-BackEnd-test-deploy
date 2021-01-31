const { Sequelize } = require("sequelize");
require("dotenv").config(); //required

// Initialize database with Sequelize
/* const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${name}`,
  {
    logging: false,
  }
);
 */

const db = new Sequelize(
  "postgres://mtfcmficsmaicg:15b4bd84c68f95f33ee8f06ebdd398d90883833baf218649325d3ac7d5d6d983@ec2-52-54-174-5.compute-1.amazonaws.com:5432/d784b8d979uq2q",
  // process.env.DB_NAME,
  // process.env.DB_USER,
  // process.env.DB_PASS,
  {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        sslmode: "require",
        rejectUnauthorized: false,
      },
    },

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

try {
  db.authenticate();
  console.log("DB loaded successfully");
} catch (e) {
  console.error(e);
}

module.exports = db;
