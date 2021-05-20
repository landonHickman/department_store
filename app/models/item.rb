class Item < ApplicationRecord
  has_many :reviews, dependent: :destroy
  belongs_to :department
end
