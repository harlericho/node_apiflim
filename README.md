# Node Express Project ApiRest Films JWT

Computer Version:

[![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)](https://www.microsoft.com/es-es/windows/windows-11?r=1)
[![Linux](https://img.shields.io/badge/Linux-FF6600?style=for-the-badge&logo=linux&logoColor=white)](https://ubuntu.com/)
[![Mac OS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)](https://www.apple.com/la/mac/)

> <strong> Project of an api service to register the data of several movies with JWT session, we use node - express - mysql - sequelize ORM. </strong>

[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express)](https://expressjs.com/es/)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://sequelize.org/)
[![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Nodejs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/es/)
[![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![Git](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![Linux](https://img.shields.io/badge/Linux-FF6600?style=for-the-badge&logo=linux&logoColor=white)](https://www.linux.org/)
[![Windows](https://img.shields.io/badge/Windows-017AD7?style=for-the-badge&logo=windows&logoColor=white)](https://www.microsoft.com/es-es/windows/windows-11?r=1)
[![IDE](https://img.shields.io/badge/Visual_studio_code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)

## 💻 Pre requirements

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" />

To use the project on your machine, you must have the following installed:

- Have the mysql service installed or a local server that has the service.
- Have installed nodejs higher than v14 and MySQL higher than 5.7.

## 🌐 Database <node_apiflim>

<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" />

Before starting the project <node_apiflim>, you must follow these steps:

1. You must have created a database (db_films) on your local server.
2. Create an .env at the root of the project.
3. In the .env file add the execution port of the project and the MySQL credentials:

   ```
   PORT = 9000
   DB_HOST = 127.0.0.1
   DB_SCHEMA = db_films
   DB_TABLE_FILM = film
   DB_TABLE_USER = user
   DB_DIALECT = mysql
   DB_USER = root
   DB_PASSWORD = root
   KEY_SECRET = code_secret
   ```

## ☕ Requirements <node_apiflim>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />

To start the project <node_apiflim>, you must follow the following steps:

1. Open a terminal at the root of the project.
2. In the main root of the project execute the following in your terminal:
   ```
   npm install
   ```

## 🚀 Start project <node_apiflim>

To start the project <node_apiflim>, you must follow the following steps:

- Open a terminal at the root of the project.
- Run the following command:
  ```
  npm run test
  ```
- Open in your browser or run in an API test program:

  - {POST REGISTER USER} = [http:/127.0.0.1:9000/api/users/register](http://127.0.0.1:9000/api/users/register)
  - {POST LOGIN JWT USER} = [http:/127.0.0.1:9000/api/users/login](http://127.0.0.1:9000/api/users/login)
  - {GET FILMS} = [http:/127.0.0.1:9000/api/films/](http://127.0.0.1:9000/api/films/)
  - {GET FILMS/ID} = [http:/127.0.0.1:9000/api/films/1](http://127.0.0.1:9000/api/films/1)
  - {POST FILMS} = [http:/127.0.0.1:9000/api/films/](http://127.0.0.1:9000/api/films/)
  - {PUT FILMS/ID} = [http:/127.0.0.1:9000/api/films/1](http://127.0.0.1:9000/api/films/1)
  - {DELETE FILMS/ID} = [http:/127.0.0.1:9000/api/films/1](http://127.0.0.1:9000/api/films/1)

<div align="center">

### My social accounts

![](https://avatars.githubusercontent.com/u/42042270?s=48&v=4)

[![Twitter Badge](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/harlericho)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/harlericho)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/u/harlericho)
[![Devlog](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white)](https://harlericho.tech)

</div>

<p align="center"><strong>Copyright © 2022 Harlericho</strong></p>
