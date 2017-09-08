#! /bin/sh
nginx                           # start nginx
nginx -c "$(pwd)/nginx.conf"    # load configuration
nginx -s reload                 # reload nginx
