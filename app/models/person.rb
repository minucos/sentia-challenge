class Person < ApplicationRecord
  validates :first_name, presence: true
end
