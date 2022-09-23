class Supplement < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :manufacturer, :serving_size, presence: true

    has_many :orders
    has_many :users, through: :orders
end
