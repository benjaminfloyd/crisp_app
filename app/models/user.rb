class User < ActiveRecord::Base
  # Include default devise modules.
  has_many :lists, dependent: :destroy
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User
end
