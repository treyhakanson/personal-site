# My Personal Site

[![Build Status](https://travis-ci.org/treyhakanson/personal-site.svg?branch=master)](https://travis-ci.org/treyhakanson/personal-site) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Overview

My personal site built with React, Node.js, PostgreSQL, and Nginx.

## TODOs

* [ ] Add information about production builds
* [ ] Add tests
* [ ] Fully configure CI

## Setup

1. Run Nginx via the utility script `init_nginx.sh`:

```sh
bash init_nginx.sh
```

2. Install Node modules:

```sh
yarn install
```

3. Initialize the postgres database:

   1. Create the `config/db-config.json` file:

   ```json
   {
       "user": "",
   	"database": "",
   	"password": "",
   	"host": "",
   	"port": ##,
   	"max": ##,
   	"idleTimeoutMillis": ##
   }
   ```

   2. Execute the `api/db/sql/init_db.sql` file:

   ```sh
   psql -f `/path/to/init_db.sql`
   ```

4. Start Webpack dev server:

```sh
yarn dev
```

4. Start the API:

```sh
yarn start
```

5. View the application at `http://localhost:8000/`
