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
1) Install the postgres server
  - $ brew install postgres
2) Start the postgres server if it did not automatically start
  - $ brew services start postgres
3) Enter the psql shell through the build-in database 'postgres'
  - psql postgres
4) Run the sql setup file
  - postgres=# \i database/dbsetup.sql
5) Connect to the new database
  - postgres=# \connect reviews
6) Run the sql file with psql
  - reviews=# \i database/schema.sql
7) Check out the tables
  - reviews=# \dt
7) Exit the psql shell
  - reviews=# \q
8) Run the seed script
  - npm run seed