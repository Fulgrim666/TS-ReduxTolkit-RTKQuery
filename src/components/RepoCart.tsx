import React from "react";
import { useActions } from "../hooks/actions";
import { IRepos } from "../Models/Models";

export function RepoCart({ repo }: { repo: IRepos }) {
  const { addFavirite } = useActions();

  const addToFaforite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavirite(repo.html_url);
  };

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks:<span className="font-bold mr-2   ">{repo.forks}</span>
        </p>
        <p className="text-sm">
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo.description}</p>
        <button
          className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
          onClick={addToFaforite}
        >
          Add
        </button>
      </a>
    </div>
  );
}
