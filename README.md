[![Build Status](https://app.codeship.com/projects/c9c3f060-0d5a-0137-45a6-76f49fd9b84a/status?branch=master)](https://app.codeship.com/projects/326708)

# kite.io

Simple multiplayer shooting game.

### Setup
* Make sure Ruby 2.3.3 is installed.
* Run `setup.sh` from the project directory. This will install dependencies, as well as generate and seed the development database.
```
./setup.sh
```
* To start the server, run `yarn run start` and `bundle exec rails s` in two separate tabs. You will then be able to connect at [localhost:3000](http://localhost:3000).

### Testing
This project tests backend code using RSpec, and features using Enzyme.
```
rspec
yarn run test
```

### Gameplay
