import React from 'react';
import axios from 'axios'

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    }
    this.submitForm = this.submitForm.bind(this)
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({ file: e.target.files[0] })
  }

  submitForm(e) {
    e.preventDefault();
    const token = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
    const formData = new FormData();
    formData.append('file', this.state.file);
    axios.post('./people/upload', formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }})
      .then(
        response => this.props.updatePeople(response.data),
        error => this.props.showError()
      )
  }

  render() {
    return(
      <form onSubmit={this.submitForm}>
        <input 
          name="file" 
          type="file" 
          accept=".csv" 
          onChange={this.update}
        />
        <input type="submit" value="Upload File" />
      </form>
    )
  }
};

export default UploadForm;