json.people do
  json.array! @people do |person|
    json.partial! 'people/person', person: person
    json.location "#{person.locations.map { |loc| loc.name }.join(', ')}"
    json.affiliations "#{person.affiliations.map { |aff| aff.name }.join(', ')}"
  end
end

json.total @count