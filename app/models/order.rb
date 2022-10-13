class Order < ApplicationRecord
    # validates :quantity, :price, :user_id, :supplement_id, presence: true

    belongs_to :user
    has_many :order_supplements
    has_many :supplements through: :order_supplements

    # accepts_nested_attributes_for :supplements
end
