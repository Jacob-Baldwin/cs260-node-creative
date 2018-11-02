import React from 'react';
import axios from 'axios';

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
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
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          Display Image: {' '}
          <input ref={(ref) => { this.imageUpload = ref; }} type="file" />
        </div>
        <div>
          <input ref={(ref) => { this.personName = ref; }} type="text" placeholder="Name" />
        </div>
        <div>
          <input ref={(ref) => { this.personBio = ref; }} type="text" placeholder="Biography" />
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
          <button>Upload</button>
        </div>
      </form>
    );
  }
}

export default SubmitForm;
