import React, { useEffect, useState } from "react";
// components
import Card from "./Card";
// helpers
import { getGameCards } from "../helpers/gameHelpers";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  addManyCard,
  addSelectedCards,
  decrementScore,
  incrementScore,
  resetSelectedCards,
  setEndGame,
  setHighScore,
  updateManyCard,
} from "../redux/slices/memoryGameSlice";
import { memoryGameSelector } from "../redux/slices/memoryGameSlice";

const GameContainer = () => {
  const dispatch = useDispatch();
  const gameCards = useSelector(memoryGameSelector.selectAll);
  const gameCardsObject = useSelector(memoryGameSelector.selectEntities);
  const { selectedCards, score, highScore } = useSelector(
    (state) => state.memoryGame
  );
  const matchedCards = gameCards.filter((item) => item.matched);

  useEffect(() => {
    const cards = getGameCards();
    dispatch(addManyCard(cards));
  }, []);

  useEffect(() => {
    if (matchedCards.length === gameCards.length && gameCards.length != 0)
      endGame();
  }, [matchedCards]);

  useEffect(() => {
    console.log(selectedCards);
    if (selectedCards.length === 2) checkMatch();
  }, [selectedCards]);

  const handleCardClick = (id) => {
    if (selectedCards.some((item) => item.id === id)) return;
    if (matchedCards.some((item) => item.id === id)) return;
    if (selectedCards.length < 2)
      dispatch(addSelectedCards(gameCardsObject[id]));
  };

  const endGame = () => {
    dispatch(setEndGame(true));
    if (score > highScore) dispatch(setHighScore(score));
  };

  const checkMatch = () => {
    if (selectedCards[0].name === selectedCards[1].name) {
      setTimeout(() => {
        dispatch(
          updateManyCard(
            selectedCards.map((item) => ({
              id: item.id,
              changes: { matched: true },
            }))
          )
        );
        dispatch(incrementScore());
      }, 500);
    } else {
      dispatch(decrementScore());
    }
    setTimeout(() => {
      dispatch(resetSelectedCards());
    }, 800);
  };

  return (
    <div className="m-auto w-full md:w-8/12 grid grid-cols-3 lg:grid-cols-6 gap-5">
      {gameCards?.map(({ name, id, matched }) => (
        <Card
          selected={selectedCards.some((item) => item.id == id)}
          matched={matched}
          onClick={() => handleCardClick(id)}
          key={id}
          cardName={name}
        />
      ))}
    </div>
  );
};

export default GameContainer;
