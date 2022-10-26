class User < ApplicationRecord
    has_secure_password

    # validates :username, presence: true, uniqueness: true
    # validates :password, :password_confirmation, presence: true
    
    has_many :orders
    # has_many :order_supplements
    has_many :supplements, through: :orders
end
