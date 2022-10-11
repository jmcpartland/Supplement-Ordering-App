class Supplement < ApplicationRecord
    # validates :name, presence: true
    # validates :manufacturer, :serving_size, presence: true

    has_many :users, through: :orders
    has_and_belongs_to_many :orders
end
