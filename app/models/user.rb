class User < ActiveRecord::Base
  # Include default devise modules.
  has_many :lists, dependent: :destroy
  has_many :foods, through: :lists
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  before_save -> do
    skip_confirmation!
  end  
  
end
