import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Contact } from "./Contact";
import "./style.scss";
import "swiper/css";
export const ContactsList: React.FC = () => {
  return (
    <>
      <h1>Contact list </h1>
      <div className="contacts">
        <Contact />
        <Contact />
        <Contact />
      </div>
    </>
  );
};
