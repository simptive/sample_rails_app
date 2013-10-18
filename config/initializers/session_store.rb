<<<<<<< HEAD
# Be sure to restart your server when you modify this file.

Ghazi::Application.config.session_store :cookie_store, :key => '_ghazi_session'
=======
require File.join(Rails.root,'lib','openshift_secret_generator.rb')

# Be sure to restart your server when you modify this file.

# Set token based on intialize_secret function (defined in initializers/secret_generator.rb)
RailsApp::Application.config.session_store :cookie_store, :key => initialize_secret(
  :session_store,
  '_railsapp_session'
)
>>>>>>> 692dfcb67b03d88566c34c96603ef446c2608116

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rails generate session_migration")
<<<<<<< HEAD
# Ghazi::Application.config.session_store :active_record_store
=======
# RailsApp::Application.config.session_store :active_record_store
>>>>>>> 692dfcb67b03d88566c34c96603ef446c2608116
