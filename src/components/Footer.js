import React from "react";
import { name, version } from "../../package.json";

export default function Footer() {
  return (
    <div className={"footer"}>
      Pagaminta su <span style={{ color: "#e25555" }}>&#9829;</span>
      <br />
      <small>Versija {version}</small>
    </div>
  );
}
