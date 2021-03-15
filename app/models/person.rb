class Person < ApplicationRecord
  validates :first_name, presence: true

  has_many :person_locations

  has_many :locations,
  through: :person_locations

  has_many :person_affiliations

  has_many :affiliations,
  through: :person_affiliations

  def create_from_csv_file(file)
    table = CSV.parse(File.read(file), headers: true)
    table.each do |row|
      name = row["Name"].split(" ")
      first_name, last_name = name[0], name[1..-1].join(" ")
      locations = row["Location"].split(", ")
      species = row["Species"]
      gender = row["Gender"]
      affiliations = row["Affiliations"].split(", ")
      weapon = row["Weapon"]
      vehicle = row["Vehicle"]

      person = Person.new({
        name: name,
        first_name: first_name,
        last_name: last_name,
        species: species,
        gender: gender,
        weapon: weapon,
        vehicle: vehicle
      })

      person.create_locations(locations)
      person.create_affilations(affiliations)

      if person.save
        next
      else
        return false
      end
  end

  def create_locations(locations)
    locations.each do |location|
      self.locations.create({ name: location.name })
    end
  end

  def create_affilations(affiliations)
    affiliations.each do |affiliation|
      self.affiliations.create({ name: affiliation.name })
  end
end
