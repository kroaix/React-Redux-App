import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCards } from '../actions';
import PokemonCard from './PokemonCard';

const CardList = ({ cards, getCards }) => {
  useEffect(() => {
    getCards();    
  }, [getCards])

  return (
    <div className="cards">
      {cards.map(card => 
        <PokemonCard key={card.id} card={card} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return{
    cards: state.cards,
    gettingCards: state.gettingCards,
    error: state.error
  }
}

export default connect(mapStateToProps, {getCards})(CardList);