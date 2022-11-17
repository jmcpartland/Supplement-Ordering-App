class Supplement < ApplicationRecord
    validates :name, :manufacturer, presence: true
    
    has_many :order_supplements
    has_many :orders, through: :order_supplements
end
