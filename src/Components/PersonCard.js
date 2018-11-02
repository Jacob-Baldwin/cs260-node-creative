import React from 'react'
import styles from './PersonCard.css';

import { Link } from 'react-router-dom'

const PersonCard = (props) => {
  let person = props.person;


  let score = null;
  if (props.show_score) {
    score = <div>
      <p>Upvotes: {person.upvotes}</p>
      <p>Downvotes: {person.downvotes}</p>
    </div>;
  }

  return (
    <div className="PersonCard">
      <img src={'/images/' + person.image_filename} className="MainImage"></img>

      <h3>{person.name}</h3>
      <h4>{(person.gender=='m')?'Male':'Female'}</h4>
      <h4>{person.age}</h4>
      <p>{person.bio}</p>

      {props.show_score?score:null}
    </div>
  );
}

export default PersonCard
