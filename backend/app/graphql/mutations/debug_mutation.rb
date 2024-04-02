module Mutations
  class DebugMutation < BaseMutation
    # このミューテーションが返すフィールド
    field :message, String, null: false

    # resolveメソッドは、ミューテーションが呼び出されたときに実行される
    def resolve
      {
        message: "Debug message"
      }
    end
  end
end
