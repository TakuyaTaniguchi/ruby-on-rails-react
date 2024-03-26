# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID." do
      argument :id, ID, required: true, description: "ID of the object."
    end

    def node(id:)
      context.schema.object_from_id(id, context)
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs." do
      argument :ids, [ID], required: true, description: "IDs of the objects."
    end

    def nodes(ids:)
      ids.map { |id| context.schema.object_from_id(id, context) }
    end

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello みゃっp!"
    end


    field :test_sample, [String], null: false,
      description: "An example field added by the generator"
    def test_sample
      ['Hello GraphQL', 'Hello World']
    end

  field :test_sample_object, [String], null: false,
    description: "An example field added by the generator"
  def test_sample_object
    ['Hello GraphQL', 'Hello World']
  end

  # all_usersフィールドを追加
  field :all_users, [Types::UserType], null: false, description: "Returns a list of all users"

  # all_usersフィールドのリゾルバーメソッド
  def all_users
    User.all
  end

  field :me, Types::UserType, null: false, description: "Returns a user"
  def me
    context[:current_user]
  end

  end
end
