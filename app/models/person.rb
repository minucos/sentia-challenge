require 'csv'

class Person < ApplicationRecord
  validates :first_name, presence: true

  has_many :person_locations

  has_many :locations,
  through: :person_locations

  has_many :person_affiliations

  has_many :affiliations,
  through: :person_affiliations

  def self.create_from_csv_file(file)
    Person.destroy_all
    table = CSV.parse(File.read(file), headers: true)
    table.each do |row|
      name = row["Name"].split(" ")
      first_name, last_name = name[0], name[1..-1].join(" ")
      locations = row["Location"] ? row["Location"].split(", ") : []
      species = row["Species"]
      gender = row["Gender"]
      affiliations = row["Affiliations"] ? row["Affiliations"].split(", ") : []
      weapon = row["Weapon"]
      vehicle = row["Vehicle"]

      next if affiliations.length == 0

      person = Person.new({
        first_name: first_name,
        last_name: last_name,
        species: species,
        gender: gender,
        weapon: weapon,
        vehicle: vehicle
      })
      
      if person.save
        person.create_locations(locations)
        person.create_affilations(affiliations)
        next
      else
        return false
      end
    end
    Person.all
  end

  def create_locations(locations)
    locations.each do |location|
      self.locations.create({ name: location })
    end
  end

  def create_affilations(affiliations)
    affiliations.each do |affiliation|
      self.affiliations.create({ name: affiliation })
    end
  end
end
