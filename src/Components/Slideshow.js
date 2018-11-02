import React from 'react';
import axios from 'axios';

import styles from './Slideshow.css';
import PersonCard from './PersonCard';
import utils from '../utils';

class Slideshow extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      current_index: 0
    };

    this.nextId = this.nextId.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  componentDidMount() {
    let self = this;

    axios.get('/api/persons')
    .then(function (response) {

      let persons_shuffled = response.data
      utils.shuffle(persons_shuffled);

      self.setState({
        persons: persons_shuffled
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
      <div className="SlideShow">
        <PersonCard person={person}/>

        <div className="Buttons">
          <button onClick={this.upvote}>Upvote</button>
          <button onClick={this.downvote}>Downvote</button>
        </div>
      </div>
    )
  }

}

export default Slideshow
