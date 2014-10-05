## How to compile

* Install [Node](http://nodejs.org)

* Install [`grunt-source`](https://github.com/jpillora/grunt-source) with `npm install -g grunt-source` (Grunt Source allows the use of external Grunt environments)

* `grunt-source` with optional `--report=true` to see GZIP size

* Grunt will do an initial compile and then watch *src* for changes, then compiling and minifying into *dist*

## How to run server examples

* Install [Go](http://golang.org)

* `cd example/ws-server`

* ...