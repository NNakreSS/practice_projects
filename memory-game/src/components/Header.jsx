import classNames from "classnames";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  addManyCard,
  removeAllCard,
  setEndGame,
} from "../redux/slices/memoryGameSlice";
import { getGameCards } from "../helpers/gameHelpers";

const Header = () => {
  const dispatch = useDispatch();
  const { score, highScore, endGame } = useSelector(
    (state) => state.memoryGame
  );

  const resetGame = () => {
    dispatch(removeAllCard());
    dispatch(addManyCard(getGameCards()));
    dispatch(setEndGame(false));
  };

  return (
    <header className="h-20 border-b-2 border-b-black grid grid-cols-4 w-11/12 m-auto mb-5">
      <h1 className="flex items-center justify-center rounded-lg w-11/12 text-black text-md xl:text-2xl font-bold">
        NakreS Memory Game
      </h1>
      <span className="flex justify-center items-center font-semibold text-md xl:text-xl">
        Score: {score}
      </span>
      <span className="flex justify-center items-center font-semibold text-md xl:text-xl">
        High Score: {highScore}
      </span>
      <button
        disabled={!endGame}
        onClick={resetGame}
        className={classNames(
          "flex justify-center items-center w-20 md:w-32 h-12 m-auto rounded-lg text-white font-semibold",
          {
            "bg-blue-200": !endGame,
            "bg-blue-500": endGame,
          }
        )}
      >
        Restart
      </button>
    </header>
  );
};

export default Header;
