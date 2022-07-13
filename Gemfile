source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.0"
gem "rails", "~> 7.0.3"
gem 'graphql'
gem "sqlite3", "~> 1.4"
gem "puma", "~> 5.0"
gem 'faker'
gem 'rack-cors'
gem 'rails_admin', '~> 3.0'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", require: false

group :development, :test do
  gem "rspec-rails"
  gem "factory_bot_rails"
  gem 'rspec-rails'
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem 'graphiql-rails'
  gem 'sass-rails'
end

gem "sassc-rails"
