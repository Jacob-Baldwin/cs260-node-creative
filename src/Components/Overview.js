import React from 'react';
import axios from 'axios';

import styles from './Overview.css';
import PersonCard from './PersonCard';

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    let self = this;

    axios.get('/api/persons')
    .then(function (response) {

      let sorted_persons = response.data;

      sorted_persons.sort((a,b) => {
        a.score = a.upvotes - a.downvotes;
        b.score = b.upvotes - b.downvotes;

        return (b.score - a.score);
      })

      self.setState({
        persons: sorted_persons
      });

    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
  }

  render() {
    let i = 0;
    let persons = this.state.persons.map((p) => {
      i = i + 1;
      return (<PersonCard person={p} ranking={i}/>)
    });

    return (
      <div>
        {persons}
      </div>
    )
  }

}

export default Overview
