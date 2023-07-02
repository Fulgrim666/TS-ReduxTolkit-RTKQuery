import { useAppSelect } from "./hooks/redux";

export const FavoritePages = () => {
  const { favorites } = useAppSelect((state) => state.github);
  if (favorites.length === 0) {
    return <p>No items</p>;
  } else {
    return (
      <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
        <ul className="list-none">
          {favorites.map((item) => (
            <li key={item}>
              <span className="font-bold mr-2">Repository link:</span>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
