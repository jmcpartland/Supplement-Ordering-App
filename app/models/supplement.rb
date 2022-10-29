class Supplement < ApplicationRecord
    validates :name, presence: true
    validates :manufacturer, presence: true
    
    has_many :order_supplements
    has_many :orders, through: :order_supplements
end
