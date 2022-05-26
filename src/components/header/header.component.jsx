import * as React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      <hr />
    </div>
  );
}
