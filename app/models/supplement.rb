class Supplement < ApplicationRecord
    # validates :name, presence: true
    # validates :manufacturer, :serving_size, presence: true
    
    has_many :order_supplements
    has_many :orders, through: :order_supplements
end
