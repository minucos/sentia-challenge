import React from 'react';
import UploadForm from './csv_upload';
import PeopleIndex from './people_index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      error: false,
      page: 1,
      total: 0
    }
    this.updatePeople = this.updatePeople.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    fetch('./people', { page: this.state.page })
      .then(response => {
        response.json()
          .then(
            data => this.setState({ 
              people: data.people, 
              total: data.total, 
              error: false 
            }),
            error => this.setState({ error: true })
          )
      })
  }

  updatePeople(people) {
    this.setState({ people, page: 1 })
  }

  changePage(x) {
    this.setState({ page: this.state.page + x })
  }

  render() {
    const { people, page, total } = this.state;

    return(
      <div className="main-container">
        <header>
          Sentia Challenge Application
        </header>
        <UploadForm updatePeople={this.updatePeople}/>
        <PeopleIndex 
          people={people} 
          changePage={this.changePage} 
          page={page}
          total={total}
        />
      </div>
  
    )
  }
};

export default App;