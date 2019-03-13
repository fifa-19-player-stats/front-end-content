import React from 'react';


const { name, age, prefFoot, value, rating, games, goals, position } = this.props;

const PlayerCard = props => {
  return (
    <div className="playerCard">

      <img src="./20801.png" alt=""/>
      <h2 className='cardName'><strong>{name}</strong></h2>

      <h3 className="cardAge">Age</h3>
      <h4 className="cardAgeProp">{age}</h4>
      <h3 className="prefFoot">Preferred Foot</h3>
      <h4 className="prefFootProp">{prefFoot}</h4>

      <h3 className="cardValue">Value</h3>
      <h4 className="valueProp">{value}</h4>
      <h3 className="cardRating">Rating</h3>
      <h4 className="cardRatingProp">{rating}</h4>

      <h3 className="cardGames">Games</h3>
      <h4 className="cardGamesProp">{games}</h4>
      <h3 className="cardGoals">Goals</h3>
      <h4 className="cardGoalsProp">{goals}</h4>

      <h3 className="cardPosition">Position</h3>
      <h4 className="cardPositionProp">{position}</h4>

      <a className='statLink' href="link to full stat page"></a>

    </div>
  );
};



//
export default PlayerCard;
