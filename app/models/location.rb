class Location < ApplicationRecord
  validates :name, presence: true

  has_many :person_locations, dependent: :destroy

  has_many :people,
  through: :person_locations
end
