module Mutations
  class Sample < BaseMutation
    field :test_field, String, null: true

    def resolve()
      {
        "test_field": "Hello World"
      }
    end
  end
end
