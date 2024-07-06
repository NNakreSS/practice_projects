import { useEffect, useState } from "react";
// ROUTER
import { useNavigate } from "react-router-dom";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../redux/slices/charactersSlice";
// UI KIT
import { Pagination, User } from "@nextui-org/react";
// COMPONENTS
import Loading from "../Components/Loading";
import Error from "../Components/Error";

const Home = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const {
    items: characters,
    isLoading,
    error,
    pages,
  } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [dispatch, page]);

  const changeHandlePage = (page) => {
    setPage(page);
  };

  const characterClickHandle = (id) => {
    navigate("/details/" + id);
  };

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="w-full h-screen">
      <h1 className=" text-3xl font-medium text-center">Characters</h1>
      <div className=" w-full h-auto grid grid-cols-4 gap-5 p-5">
        {characters.map((char, key) => (
          <User
            onClick={() => characterClickHandle(char.id)}
            className=" cursor-pointer border h-24 flex justify-start gap-5 pl-4 font-mono font-bold shadow-md border-neutral-400 shadow-gray-800/20"
            key={key}
            name={char.name}
            description={char.gender + " / " + char.status}
            avatarProps={{
              src: char.image,
              className: "w-16 h-16 text-large",
              radius: "large",
              isBordered: true,
              color:
                char.status == "Alive"
                  ? "success"
                  : char.status == "unknown"
                  ? "warning"
                  : "danger",
            }}
          />
        ))}
      </div>
      <div className="w-full  p-10 flex items-end justify-center">
        <Pagination
          isCompact
          showControls
          total={pages}
          initialPage={page}
          onChange={changeHandlePage}
        />
      </div>
    </div>
  );
};

export default Home;
