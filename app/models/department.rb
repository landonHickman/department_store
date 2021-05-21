class Department < ApplicationRecord
  has_many :items, dependent: :destroy #has many items plural
end
