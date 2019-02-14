[![Build Status](https://app.codeship.com/projects/c9c3f060-0d5a-0137-45a6-76f49fd9b84a/status?branch=master)](https://app.codeship.com/projects/326708)

# kite.io

Simple multiplayer shooting game.

#### Setup
* Make sure Ruby 2.3.3 is installed.
* Run `setup.sh` from the project directory. This will install dependencies, as well as generate and seed the development database.
```
./setup.sh
```
* To start the server, run `yarn run start` and `bundle exec rails s` in two separate tabs. You will then be able to connect at [localhost:3000](http://localhost:3000).

#### Testing
Backend code is tested using RSpec, and features using Enzyme.
```
rspec
yarn run test
```

#### Deploying to Heroku
* After creating the app on Heroku, you will need to add the add-ons for Postgres and Redis for database and WebSocket functionality.
```
heroku addons:add heroku-postgresql -a app-name
heroku addons:add redistogo -a app-name
```
* In production, the `ROOT_URL` environment variable sets the cable server's URI. Also, ActionCable will only accept WebSocket requests from origins matching `ROOT_URL`.
```
heroku config:set ROOT_URL="app-name.herokuapp.com" -a app-name
```
* Because this app uses Bundler 2 and Heroku uses Bundler 1.15 by default, we need to explicitly set the buildpack (below).
```
heroku buildpacks set https://github.com/bundler/heroku-buildpack-bundler2 -a app-name
```
* Finally, create the release with `git push heroku master`

#### Gameplay


#### Acknowledgements
* [Koacksel](https://github.com/nwalberts/koacksel) by Nick Alberts - ActionCable + React implementation
* Sophie Debenedetto's [article on ActionCable on Heroku](https://blog.heroku.com/real_time_rails_implementing_websockets_in_rails_5_with_action_cable#action-cable-comprehensive-sleek-and-easy-to-use)
* Countless resources from [Launch Academy](https://launchacademy.com/)
