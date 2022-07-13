# frozen_string_literal: true

class ObjectTypes::User < Types::BaseObject
  field :id, ID, null: false
  field :name, String, null: true
  field :nickname, String, null: true
  field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  field :books, [ObjectTypes::Book] , null: false
  field :books_object_count, Integer, null: false

  def books_object_count
    object.books.count
  end
end