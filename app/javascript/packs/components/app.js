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
    this.updatePeople = this.updatePeople.bind(this);
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

  updatePeople(people) {
    this.setState({people})
  }

  render() {
    const { people } = this.state;

    return(
      <div className="main-container">
        <header>
          Sentia Challenge Application
        </header>
        <UploadForm updatePeople={this.updatePeople}/>
        <PeopleIndex people={people} />
      </div>
  
    )
  }
};

export default App;