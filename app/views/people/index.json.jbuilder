json.array! @people do
  json.partial! 'people/person', person: person
  json.locations "#{person.locations.join(', ')}"
  json.affilations "#{person.affilations.join(', ')}"
end