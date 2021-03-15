class Location < ApplicationRecord
  validates :name, presence: true

  has_many :person_locations

  has_many :people,
  through: :person_locations
end
