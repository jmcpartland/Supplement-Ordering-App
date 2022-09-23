class Order < ApplicationRecord
    # validates :quantity, :price, :user_id, :supplement_id, presence: true

    belongs_to :user
    belongs_to :supplement
end
