import React from "react";
import "./style.scss";
export const Search: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");
  return (
    <div className="search">
      <form action="post">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          <img src="images/search.svg" alt="" />
        </button>
      </form>
    </div>
  );
};
