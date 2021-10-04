class Customer < ApplicationRecord
  validates :name, presence: true, length: { maximum: 100 }
  validates :memo, length: { maximum: 3000 }
end
