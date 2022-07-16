import React from "react";
import { ChatRoomsList, ContactsList, Search, User } from "../../components";
import Mainlayout from "../../Layouts/Mainlayout";

export const Home: React.FC = () => {
  return (
    <Mainlayout>
      <User />
      <Search />
      <ContactsList />
      <ChatRoomsList />
    </Mainlayout>
  );
};
