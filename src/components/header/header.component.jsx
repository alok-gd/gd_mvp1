import * as React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <Logo className="logo" />
      <hr />
    </div>
  );
}
