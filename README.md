empty_canvas
============

A simple Sinatra app speeding up static sites development.

Requirements
------------
* Ruby
* Bundler (`gem install bundler` if you don't have it yet)

Setup
------------
1. Clone the repo.
2. Run `bundle install` to install all the dependencies.
3. Run `ruby empty_canvas.rb` to start the server.
4. Visit `http://localhost:4567/`.

Features
--------
* Easy templating (ERB + passing a template name after a `/` in the URL + one master layout)
* Helper for generating Lorem ipsum text (using [Forgery]) and images (using [lorempixel]) 

Contributing
------------
If you find it useful and would like to add something, just fork it, do your thing, then send me a pull request.

TODO
----
* Sass + Compass
* CoffeeScript

[Forgery]: https://github.com/sevenwire/forgery
[lorempixel]: http://lorempixel.com/