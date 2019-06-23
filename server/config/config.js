require('dotenv').config();

const{USER_NAME, PASSWORD, DB_HOST, DB_NAME, DB_PORT} = process.env;
console.log(USER_NAME, PASSWORD)
module.exports = {
  development: {
    username: 'postgres',
    password: 'denky',
    database: 'postgres',//DB_NAME,
    host: '127.0.0.1',//DB_HOST,
    port: 5432,//DB_PORT,
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
