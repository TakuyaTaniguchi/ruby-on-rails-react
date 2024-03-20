class User < ApplicationRecord
        # Include default devise modules.
        devise :database_authenticatable, :registerable,
                :recoverable, :rememberable, :validatable,
                :confirmable, :omniauthable
        include DeviseTokenAuth::Concerns::User

        # モデルの関連付け
        has_many :memos
end
