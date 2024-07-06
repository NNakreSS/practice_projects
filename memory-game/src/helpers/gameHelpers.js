export const cards = [
  "cSharp",
  "cpp",
  "figma",
  "gitlab",
  "go",
  "java",
  "javaScript",
  "php",
  "python",
  "react",
  "redux",
  "vue",
];

export const getGameCards = () => {
  const newCards = createCards();
  return shuffleCards(newCards);
};

export const createCards = () => {
  const newCardArray = [...cards, ...cards];
  return newCardArray.map((item, index) => ({
    id: index,
    name: item,
    matched: false,
  }));
};

export const shuffleCards = (cards) => {
  const swapCards = [...cards];
  for (let currentCard = swapCards.length - 1; currentCard > 0; currentCard--) {
    const swapIndex = Math.floor(Math.random() * (currentCard + 1));
    const swappedTwoCard = [swapCards[swapIndex], swapCards[currentCard]];
    [swapCards[currentCard], swapCards[swapIndex]] = swappedTwoCard;
  }
  return swapCards;
};
