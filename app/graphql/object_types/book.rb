# frozen_string_literal: true

class ObjectTypes::Book < Types::BaseObject
  field :id, ID, null: false
  field :title, String
  field :user, ObjectTypes::User , null: false
  field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
end