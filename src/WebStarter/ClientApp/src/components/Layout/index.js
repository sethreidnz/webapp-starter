import React from "react";
import "./Layout.scss";

export const Layout = ({ children }) => (
  <>
    <header>Header</header>
    <main>{children}</main>
    <footer />
  </>
);
