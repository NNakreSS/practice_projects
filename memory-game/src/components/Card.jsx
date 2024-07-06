import classNames from "classnames";
import icons from "../utils/icons/CardIcons";

const Card = ({ cardName, matched, selected, ...props }) => {
  return (
    <div
      {...props}
      className={classNames(
        "card [perspective:1000px] [transform-style:preserve-3d] h-36 w-full relative cursor-pointer duration-500",
        { open: selected || matched }
      )}
    >
      <div className="card-front absolute text-8xl text-white z-1 bg-blue-400 w-full h-full flex justify-center items-center rounded-md">
        ?
      </div>
      <div
        className={classNames(
          "card-back absolute z-0 bg-blue-400 w-full h-full flex justify-center items-center rounded-md duration-700 p-3",
          { "opacity-50": matched }
        )}
      >
        <img
          className="object-scale-down w-full h-full"
          src={icons[cardName + "Icon"]}
          alt={cardName + " Icon"}
        />
      </div>
    </div>
  );
};

export default Card;
