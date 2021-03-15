import React from 'react';
import axios from 'axios'

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    }
    this.submitForm = this.submitForm.bind(this)
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({ file: e.target.value })
  }

  submitForm(e) {
    e.preventDefault();
    const token = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

    axios.post('./people/upload', { file: this.state.file })
      .then(response => {
        response.json()
          .then(
            people => this.props.updatePeople(people),
            error => this.props.showError()
          )
      });
  }

  render() {
    return(
      <form onSubmit={this.submitForm}>
        <input type="file" accept=".csv" onChange={this.update}/>
        <input type="submit" value="Upload File" />
      </form>
    )
  }
};

export default UploadForm;