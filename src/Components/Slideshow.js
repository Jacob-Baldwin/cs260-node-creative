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

    this.nextId = this.nextId.bind(this);
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

  nextId() {
    console.log('next');

    var current_id = this.state.current_id
    var new_id = this.state.current_id + 1;

    if (new_id >= this.state.persons.length) {
      new_id = 0;
    }

    this.setState({
      current_id: new_id
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

        <button className="NextButton" onClick={this.nextId}>Next</button>
        <button>Upvote</button>
        <button>Downvote</button>
      </div>
    )
  }

}

export default Slideshow
