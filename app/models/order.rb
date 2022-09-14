class Order < ApplicationRecord
    belongs_to :users
    belongs_to :supplements
end
