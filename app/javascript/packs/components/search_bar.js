import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }

  }

  update(e) {
    this.setState({ search: e.target.value})
  }

  submit(e) {
    e.preventDefault();
    this.props.filter(this.state.search);
  }

  render() {
    return(
      <form onSubmit={(e) => this.submit(e)}>
        <input 
          type="text" 
          value={this.state.search} 
          onChange={(e) => this.update(e)}
        />
        <input type="submit" value="Filter" />
      </form>
    )
  }
};

export default SearchBar;