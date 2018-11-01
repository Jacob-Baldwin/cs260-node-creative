import React from 'react';
import axios from 'axios';

import styles from './Slideshow.css';

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
    let person = this.state.persons[this.state.current_id];

    if (person == null) {
      return null;
    }

    return (
      <div>
        <img src={'/images/' + person.image_filename} className="MainImage"></img>

        <h3>{person.name}</h3>
        <h4>{(person.gender=='m')?'Male':'Female'}</h4>
        <h4>{person.age}</h4>
        <p>{person.bio}</p>

        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    )
  }

}

export default Slideshow
