import React from "react";

import { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";

export default function B() {
  const { isDark } = useContext(ThemeContext);
  return <div>Dark is {isDark}</div>;
}
