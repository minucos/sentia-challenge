class Person < ApplicationRecord
  validates :first_name, presence: true

  has_many :person_locations

  has_many :locations,
  through: :person_locations

  has_many :person_affiliations

  has_many :affiliations,
  through: :person_affiliations
end
