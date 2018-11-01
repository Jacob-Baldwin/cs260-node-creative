import React from 'react';
import axios from 'axios';

class Slideshow extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      current_id: 0
    };
  }

  componentDidMount() {
    let self = this;

    axios.get('/api/persons')
    .then(function (response) {

       self.setState({
         persons: response.data
       });

    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
  }

  render() {
    let image_path = "placeholder.jpg"
    if (this.state.persons.length > 0) {
      image_path = '/images/' + this.state.persons[this.state.current_id].image_filename;
    }

    return (
      <div>
        <img src={image_path}></img>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    )
  }

}

export default Slideshow
