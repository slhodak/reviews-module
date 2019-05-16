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
3) Create a database
  - $ createdb reviews
4) Enter the psql shell
  - $ psql reviews
5) Run the sql file with psql
  - reviews=# \i database/schema.sql