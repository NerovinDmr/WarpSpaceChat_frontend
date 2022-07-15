import React from "react";
import { ChatRoomsList, ContactsList, Search, User } from "../../components";
import Mainlayout from "../../Layouts/Mainlayout";

function Home() {
  return (
    <Mainlayout>
      <User />
      <Search />
      <ContactsList />
      <ChatRoomsList />
    </Mainlayout>
  );
}

export default Home;
