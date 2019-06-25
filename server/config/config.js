require('dotenv').config();

const{DB_USER_NAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT} = process.env;
module.exports = {
  development: {
    username: DB_USER_NAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres'
  },
  test: {
    use_env_variable: 'DATABASE_TEST_URL',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
};
