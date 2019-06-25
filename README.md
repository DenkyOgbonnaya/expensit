# Expensit
A simple app to create and view your expenses

## Installation
```
1 Git clone this repository
2 cd to cloned repo root directory
3 run yarn add to install all dependencies
4 run node server.js to start server
5 open another terminal and cd to projects client directory
6 run yarn add to install clients dependencies
7 run yarn start to start client server
8 visit http://localhost:3000 on your browser to view app.
```

**Pre-requisit**

Install sequelize-cli,
Create PostgreSQL database,
Navigate to server directory and run migrations:
```
- yarn global add sequelize-cli
- cd server
- run sequelize db:migrate
```

Create a .env file in the root directory to store enironment variables. The .env.example file should guide you. 