class Item < ApplicationRecord
  has_many :reviews, dependent: :destroy #has many reviews plural
  belongs_to :department #belongs to department singular
end
