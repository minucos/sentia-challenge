require 'csv'

class Person < ApplicationRecord
  validates :first_name, presence: true

  has_many :person_locations, dependent: :destroy

  has_many :locations,
  through: :person_locations

  has_many :person_affiliations, dependent: :destroy

  has_many :affiliations,
  through: :person_affiliations

  def self.create_from_csv_file(file)
    Person.destroy_all
    table = CSV.parse(File.read(file), headers: true)
    ActiveRecord::Base.transaction do
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
  end

  def self.sort_by_field(field,page)
    Person.all
        .order("#{field} ASC")
        .page(page).per(10)
        .includes(:locations, :affiliations)
  end

  def create_locations(locations)
    locations.each do |location|
      existing_location = Location.find_by(name: location)
      if existing_location
        self.locations << existing_location
      else
        self.locations.create({ name: location })
      end
    end
  end

  def create_affilations(affiliations)
    affiliations.each do |affiliation|
      existing_affiliation = Affiliation.find_by(name: affiliation)
      if existing_affiliation
        self.affiliations << existing_affiliation
      else
        self.affiliations.create({ name: affiliation })
      end
    end
  end
end
