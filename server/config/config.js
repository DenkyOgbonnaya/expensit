require('dotenv').config();

const{DB_URL, DATABASE_TEST_URL, DB_USER, DB_HOST, DB_PASS, DB_NAME} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    port: 5432,
    dialect: 'postgres'
  },
  test: {
    use_env_variable: DATABASE_TEST_URL,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: DATABASE_URL,
    dialect: 'postgres'
  }
};
