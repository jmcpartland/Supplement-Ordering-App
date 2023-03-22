class OrderSupplement < ApplicationRecord
    belongs_to :supplement
    belongs_to :order
end