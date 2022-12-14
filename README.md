  <p style="font-size: 24px" align="center">This is a basic api authentication as layout api powered by Nest Framework.</p>

## Description

[Nest](https://docs.nestjs.com/) framework TypeScript starter repository with sequelize/postgres configuration and basic authentication user crud.

## Requeriments

<p><a target="_blank" href="https://nodejs.org/en/">NodeJs</a> running on your computer.</p>
Check if you have node installed on your system by running the following command in terminal
```bash
$ node -v
```

## Installation

```bash
$ npm install
```

## Configuration

<ul>
<li>Find the .env.sample file, copy it and create a new .env with the connection data to your database</li>
<li>Execute npx sequelize-cli db:migate to create the users table</li>
</ul>

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
