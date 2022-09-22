class User < ApplicationRecord
    has_secure_password
    
    validates :password, :password_confirmation, presence: true
    validates :username, presence: true, uniqueness: true
    has_many :supplements, through: :orders
end
