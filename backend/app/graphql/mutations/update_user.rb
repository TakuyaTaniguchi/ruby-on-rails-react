# frozen_string_literal: true

module Mutations
  class UpdateUser < BaseMutation
    # TODO: define return fields
    field :user, Types::UserType, null: true

    # TODO: define arguments
    argument :name, String, required: true
    argument :nickname, String, required: true
    argument :image, String, required: true



    # TODO: define resolve method
    def resolve(name:, nickname:, image:)
      user = context[:current_user]
      if user.update(name: name, nickname: nickname, image: image)
        { user: user }
      else
        { user: nil }
      end
    end
  end
end
