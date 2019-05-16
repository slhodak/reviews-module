# Project Name

> Project description

## Related Projects

  - https://github.com/freeseats/exzerone-search-bar
  - https://github.com/freeseats/Menu-Related-SideBar
  - https://github.com/freeseats/matthewjdiaz1-photo-service
  - https://github.com/freeseats/wfong-service-reservations

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Install the necessary dependencies for this module (npm install)
> Transpile and bundle all the components (webpack)
> Start the server (npm run sever-dev)
> The public folder will be available at localhost port 3010

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- PostgreSQL 11.2

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### PostgreSQL Setup

0) Have Homebrew
  - https://brew.sh
1) Run the postgres setup
  - npm run pg-setup
  - if db already exists and you get an error: $ psql reviews
2) Connect to the new database
  - reviews=# \connect reviews
3) Run the sql file with psql
  - reviews=# \i database/schema.sql
4) Check out the tables
  - reviews=# \dt
5) Exit the psql shell
  - reviews=# \q
6) Run the seed script
  - npm run seed