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

npm install -g webpack
npm install -g webpack-cli


### PostgreSQL Setup

0) Have Homebrew
  - https://brew.sh
1) Install postgres
  - brew install postgres
2) Start postgres if it is not already started
  - brew services start postgres
1) Run the following commands:
  - createdb reviews
  - $ psql reviews
2) Run the schema file
  - reviews=# \i database/schema.sql
4) Check out the tables
  - reviews=# \dt
5) Exit the psql shell
  - reviews=# \q
6) Go to the config/localRole.example.js file
  - rename to 'localRole.js'
  - make the key equal to your local username or whatever is the username of the postgres role that created the database (run 'select * from pg_roles;' in the psql shell [psql reviews to enter the shell again] to see a list of possibilities)
6) Run the seed script (don't forget npm install)
  - npm run seed
7) Check if the tables populated
  - psql reviews
  - reviews=# select * from reviews;