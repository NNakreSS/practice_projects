import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const MemoryGameAdapter = createEntityAdapter();

export const memoryGameSelector = MemoryGameAdapter.getSelectors(
  (state) => state.memoryGame
);

const initialState = () =>
  MemoryGameAdapter.getInitialState({
    selectedCards: [],
    score: 0,
    highScore: localStorage.getItem("highScore") || 0,
    endGame: false,
  });

const reducers = {
  updateCard: MemoryGameAdapter.updateOne,
  updateManyCard: MemoryGameAdapter.updateMany,
  addManyCard: MemoryGameAdapter.addMany,
  removeAllCard: MemoryGameAdapter.removeAll,

  addSelectedCards(state, { payload }) {
    state.selectedCards.push(payload);
  },

  resetSelectedCards(state) {
    state.selectedCards = [];
  },

  incrementScore(state) {
    state.score += 50;
  },

  decrementScore(state) {
    state.score -= 10;
  },

  setEndGame(state, { payload }) {
    if (!payload) state.score = 0;
    state.endGame = payload;
  },

  setHighScore(state, { payload }) {
    state.highScore = payload;
    localStorage.setItem("highScore", payload);
  },
};

const MemortGameSlice = createSlice({
  name: "memoryGame",
  initialState,
  reducers,
});

export default MemortGameSlice.reducer;
export const {
  incrementScore,
  decrementScore,
  setEndGame,
  updateManyCard,
  addManyCard,
  addSelectedCards,
  resetSelectedCards,
  setHighScore,
  removeAllCard,
} = MemortGameSlice.actions;
