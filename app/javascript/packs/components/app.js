import React from 'react';
import PeopleIndex from './people_index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }

  componentDidMount() {

  }

  render() {
    const { people } = this.state;
    return(
      <div className="main-container">
        <header>
          Sentia Challenge Application
        </header>
        <PeopleIndex people={people} />
      </div>
  
    )
  }
};

export default App;