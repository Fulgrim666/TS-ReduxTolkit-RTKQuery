import React, { useEffect, useState } from "react";
import {
  useSearchUsersQuery,
  useLazyGetUsereposQuery,
} from "./store/Github/Github.api";
import { UseDebounce } from "./hooks/debounce";
import { RepoCart } from "./components/RepoCart";

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = UseDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });
  const [fetchreps, { isLoading: isRepsLoading, data: reps }] =
    useLazyGetUsereposQuery();
  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data]);

  const clickHandler = (username: string) => {
    fetchreps(username);
    setDropdown(false);
  };

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="accent-red-600">Network error</p>}
      <div className="relative w-[560px]">
        <input
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for Github username"
        />
        {dropdown && (
          <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
            {isLoading && <p>Loading</p>}
            {data?.map((user) => (
              <li
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                key={user.id}
                onClick={() => clickHandler(user.login)}
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
        <div className="container">
          {isRepsLoading && <p className="text-container">Repositories</p>}
          {reps?.map((repo) => (
            <RepoCart repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
