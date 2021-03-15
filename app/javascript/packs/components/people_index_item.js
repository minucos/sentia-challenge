import React from 'react';

const PeopleIndexItem = ({person}) => {
  const { 
    first_name,
    last_name,
    location,
    species,
    gender,
    affiliations,
    weapon,
    vehicle
  } = person;

  return(
    <tr className="row">
      <td className="people-col" data-field-name="Name">
        {`${first_name} ${last_name}`}
      </td>
      <td className="people-col" data-field-name="Location">
        {location}
      </td>
      <td className="people-col" data-field-name="Species">
        {species}
      </td>
      <td className="people-col" data-field-name="Gender">
        {gender}
      </td>
      <td className="people-col" data-field-name="Affiliations">
        {affiliations}
      </td>
      <td className="people-col" data-field-name="Weapon">
        {weapon}
      </td>
      <td className="people-col" data-field-name="Vehicle">
        {vehicle}
      </td>
    </tr>
  )
}

export default PeopleIndexItem;