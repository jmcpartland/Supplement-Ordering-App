class Supplement < ApplicationRecord
    has_many :users, through: :orders
end
