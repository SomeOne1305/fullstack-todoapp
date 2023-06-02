import React from "react";
import Navigation from "./Navigation";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-100 bg-top pb-5">
      <Navigation/>
      <h1 className="text-center text-lg user-select-none text-gradient text-capitalize mt-5 pt-5">
        <i className="bi bi-rocket"></i>
        To do
      </h1>
    </header>
  );
};
export default Header