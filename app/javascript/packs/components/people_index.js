import React from 'react';
import PeopleIndexItem from './people_index_item';

const PeopleIndex = (props) => {
  const people = props.people.map((person, id) => {
    return <PeopleIndexItem key={id} person={person} />
  })

  const { changePage, page, total } = props;
  
  return(
    <div>
      <table>
        <thead>
          <tr className="table-title-row">
            <th className="table-titles" onClick={() => props.sortBy("first_name")}>
              Name
            </th>
            <th className="table-titles">
              Location
            </th>
            <th className="table-titles" onClick={() => props.sortBy("species")}>
              Species
            </th>
            <th className="table-titles" onClick={() => props.sortBy("gender")}>
              Gender
            </th>
            <th className="table-titles">
              Affiliations
            </th>
            <th className="table-titles" onClick={() => props.sortBy("weapon")}>
              Weapon
            </th>
            <th className="table-titles" onClick={() => props.sortBy("vehicle")}>
              Vehicle
            </th>
          </tr>
        </thead>
        <tbody>
          {people}
        </tbody>
      </table>
      <footer>
        <div className="footer-left">
          {page > 1 ? <button onClick={() => changePage(-1)}>◀︎ Prev</button> : null}
        </div>
        <div className="footer-right">
          {page * 10 < total ? <button onClick={() => changePage(1)}>Next ▶︎</button> : null}
        </div>
      </footer>
    </div>
  )
}

export default PeopleIndex;