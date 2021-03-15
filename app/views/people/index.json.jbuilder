json.array! @people do |person|
  json.partial! 'people/person', person: person
  json.locations "#{person.locations.join(', ')}"
  json.affilations "#{person.affiliations.join(', ')}"
end