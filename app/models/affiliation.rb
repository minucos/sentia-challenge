class Affiliation < ApplicationRecord
  validates :name, presence: true

  has_many :person_affiliations, dependent: :destroy

  has_many :people,
  through: :person_affiliations
end
