import React from 'react';
import PeopleIndexItem from './people_index_item';

const PeopleIndex = (props) => {
  const people = props.people.map((person, id) => {
    <PeopleIndexItem key={id} person={person} />
  })
  return(
    <table>
      <thead>
        <tr className="table-title-row">
          <th className="person-titles" >
            Name
          </th>
          <th className="table-titles" >
            Location
          </th>
          <th className="table-titles" >
            Species
          </th>
          <th className="table-titles" >
            Gender
          </th>
          <th className="table-titles" >
            Affiliations
          </th>
          <th className="table-titles" >
            Weapon
          </th>
          <th className="table-titles" >
            Vehicle
          </th>
        </tr>
      </thead>
      <tbody>
        {people}
      </tbody>
    </table>
  )
}

export default PeopleIndex;