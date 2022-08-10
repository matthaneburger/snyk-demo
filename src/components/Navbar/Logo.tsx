import React from "react";
import whiteLogo from "../../assets/ufc-store.png";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img src={whiteLogo} alt="ufc store" style={{ paddingBottom: "10px" }} />
    </Link>
  );
};
