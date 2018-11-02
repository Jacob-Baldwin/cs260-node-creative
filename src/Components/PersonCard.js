import React from 'react'
import styles from './PersonCard.css';

import { Link } from 'react-router-dom'

const PersonCard = (props) => {
  let person = props.person;


  let score = null;
  let ranking = null;
  if (props.ranking) {
    ranking = <p className="Ranking">Rank: {props.ranking}</p>;
    score = <p className="Score">Score: {person.upvotes - person.downvotes}</p>;
  }

  return (
    <div className="PersonCard">
      <img src={'/images/' + person.image_filename} className="MainImage"></img>

      <div className="PersonInfo">
        <h3 className="Name">{person.name}</h3>
        <h4 className="Gender">{(person.gender=='m')?'Male':'Female'}</h4>
        <h4 className="Age">{person.age}</h4>
        <p className="Bio">{person.bio}</p>
        {ranking}
        {score}
      </div>

    </div>
  );
}

export default PersonCard
