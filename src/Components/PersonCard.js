import React from 'react'
import styles from './PersonCard.css';

import { Link } from 'react-router-dom'

const PersonCard = (props) => {
  let person = props.person;

  return (
    <div className="PersonCard">
      <img src={'/images/' + person.image_filename} className="MainImage"></img>

      <h3>{person.name}</h3>
      <h4>{(person.gender=='m')?'Male':'Female'}</h4>
      <h4>{person.age}</h4>
      <p>{person.bio}</p>
    </div>
  );
}

export default PersonCard
