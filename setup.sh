bundle install
yarn install
bundle exec rake db:create
bundle exec rake db:schema:load
bundle exec rake db:seed
