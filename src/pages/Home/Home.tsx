import React from "react";
import { Search, User } from "../../components";
import Mainlayout from "../../Layouts/Mainlayout";

function Home() {
  return (
    <Mainlayout>
      <User />
      <Search />
    </Mainlayout>
  );
}

export default Home;
