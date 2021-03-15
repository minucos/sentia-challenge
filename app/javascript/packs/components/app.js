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
      total: 0,
      sort: null
    }
    this.updatePeople = this.updatePeople.bind(this);
    this.changePage = this.changePage.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount() {
    const { page, sort } = this.state
    let url = `people?page=${page}`
    if (sort) {
      url += `&sort=${sort}`
    }
    fetch(url)
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

  componentDidUpdate(prevProps, prevState) {
    const { page, sort } = this.state;
    if (prevState.sort !== sort || prevState.page !== page) {
      let url = `people?page=${page}`
      if (sort) {
        url += `&sort=${sort}`
      }
      fetch(url)
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
  }

  updatePeople(people) {
    this.setState({ people, page: 1 })
  }

  changePage(x) {
    this.setState({ page: this.state.page + x })
  }

  sortBy(field) {
    this.setState({ sort: field })
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
          sortBy={this.sortBy}
          page={page}
          total={total}
        />
      </div>
  
    )
  }
};

export default App;