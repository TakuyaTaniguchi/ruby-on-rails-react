module Types
  class AuthLoginInputAdmin < Types::BaseInputObject
    argument :email, String, required: true
    argument :password, String, required: true
  end
end

module Mutations
  class AuthLogin < BaseMutation
    argument :input, Types::AuthLoginInputAdmin, required: true
    def resolve(input:)

      email = input[:email]
      password = input[:password]



      # # ログを出力
      # Rails.logger.info("email: #{email}, password: #{password}")


      user = User.find_for_authentication(email: email)
      if user&.valid_password?(password)
        # Devise Token Authのトークン生成ロジックを利用してトークンを生成
        client_id = SecureRandom.urlsafe_base64(nil, false)
        token = user.create_token(client_id)
        user.save

        { uid: user.uid, client: client_id, token: token }
      else
        # 適切なエラーハンドリングを行う
        raise GraphQL::ExecutionError.new("Credentials are invalid", extensions: {code: "UNAUTHENTICATED"})
      end
    end
  end
end
