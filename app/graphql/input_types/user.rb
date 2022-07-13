class InputTypes::User < Types::BaseInputObject
  graphql_name 'UserAttributes' 

  argument :name, String, required: false
  argument :nickname, String, required: false
end