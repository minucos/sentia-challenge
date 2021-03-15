import React from 'react';
import UploadForm from './csv_upload';
import PeopleIndex from './people_index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      error: false
    }
  }

  componentDidMount() {
    fetch('./people')
      .then(response => {
        response.json()
          .then(
            people => this.setState({ people: people, error: false }),
            error => this.setState({ error: true })
          )
      })
  }

  render() {
    const { people } = this.state;
    return(
      <div className="main-container">
        <header>
          Sentia Challenge Application
        </header>
        <UploadForm />
        <PeopleIndex people={people} />
      </div>
  
    )
  }
};

export default App;