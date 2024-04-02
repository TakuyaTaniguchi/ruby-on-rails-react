# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :sample, mutation: Mutations::Sample
    field :update_user, mutation: Mutations::UpdateUser
    field :debug, mutation: Mutations::DebugMutation
    field :auth_login, mutation: Mutations::AuthLogin
  end
end
