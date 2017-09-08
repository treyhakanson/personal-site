# My Personal Site

## Overview

My personal site built with React, Node.js, PostgreSQL, and Nginx.

## Setup

1. Run Nginx with the configuration in `nginx.conf`:

```sh
nginx                           # start nginx
nginx -c /path/to/nginx.conf    # set configuration
nginx -s reload                 # reload Nginx
```

2. Install Node modules:

```sh
npm i
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

3. Start Webpack dev server:

```sh
npm run dev
```

4. Start the API:

```sh
npm run start
```

5. View the application at `http://localhost:8000/`
