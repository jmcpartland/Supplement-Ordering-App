class Order < ApplicationRecord
    validates :name, :quantity, presence: true

    belongs_to :user
    has_many :order_supplements
    has_many :supplements, through: :order_supplements
end
