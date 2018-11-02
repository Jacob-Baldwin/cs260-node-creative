import React from 'react';
import axios from 'axios';

import styles from './Slideshow.css';
import PersonCard from './PersonCard';

class Slideshow extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      current_index: 0,
    };

    this.nextId = this.nextId.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
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
    var current_index = this.state.current_index
    var new_id = this.state.current_index + 1;

    if (new_id >= this.state.persons.length) {
      new_id = 0;
    }

    this.setState({
      current_index: new_id
    });
  }

  upvote() {
    let self = this;

    let person = this.state.persons[this.state.current_index];

    axios.get('/api/upvote?id=' + person.id)
    .then(function (response) {

       self.setState({
         persons: response.data
       });

       self.nextId();
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
  }

  downvote() {
    let self = this;

    let person = this.state.persons[this.state.current_index];

    axios.get('/api/downvote?id=' + person.id)
    .then(function (response) {

       self.setState({
         persons: response.data
       });

       self.nextId();
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
  }

  render() {
    let person = this.state.persons[this.state.current_index];

    if (person == null) {
      return null;
    }

    return (
      <div>
        <PersonCard person={person}/>

        <button onClick={this.upvote}>Upvote</button>
        <button onClick={this.downvote}>Downvote</button>
      </div>
    )
  }

}

export default Slideshow
