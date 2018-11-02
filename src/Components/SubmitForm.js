import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router'

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      redirect: null
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('avatar', this.imageUpload.files[0]);
    data.append('name', this.personName.value);
    data.append('bio', this.personBio.value);
    data.append('gender', this.personGender.value);
    data.append('age', this.personAge.value);

    axios.post('/api/submit', data)
    .then((res) => {
      console.log(res);
      alert("Submitted Successfully");
      this.setState({
        redirect: <Redirect to="/" push={true}/>
      })
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.personName = ref; }} type="text" placeholder="Name" />
        </div>
        <div>
          <input ref={(ref) => { this.personAge = ref; }} type="number" placeholder="Age" />
        </div>
        <div>
          <select ref={(ref) => { this.personGender = ref; }}>
            <option value='m'>Male</option>
            <option value='f'>Female</option>
          </select>
        </div>
        <br />
        <div>
          <textarea ref={(ref) => { this.personBio = ref; }} type="text" placeholder="Biography" />
        </div>
        <br/>
        Display Image:
        <div>
          <input ref={(ref) => { this.imageUpload = ref; }} type="file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        {this.state.redirect}
      </form>
    );
  }
}

export default SubmitForm;
