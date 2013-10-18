<<<<<<< HEAD
=======

require File.join(Rails.root,'lib','openshift_secret_generator.rb')
>>>>>>> 692dfcb67b03d88566c34c96603ef446c2608116
# Be sure to restart your server when you modify this file.

# Your secret key for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!
# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
<<<<<<< HEAD
Ghazi::Application.config.secret_token = '691a95141c06fd72d13c00e562bffb03d44ee6c7b2b7b5a27fd606d0329419d945467f41077bc30986c1355ff0cbc43fff624069718e4e9b57b8dc6a943f3251'
=======

# Set token based on intialize_secret function (defined in initializers/secret_generator.rb)
RailsApp::Application.config.secret_token = initialize_secret(
  :token,
  '335a4e365ef2daeea969640d74e18f0e3cd9fae1abd8f4125691a880774ea6d456a29c0831aa6921bf86a710fe555e916f0673f5657619ec9df22e0409bec345'
)
>>>>>>> 692dfcb67b03d88566c34c96603ef446c2608116
