import React, { useState } from "react";

const [theme, setTheme] = useState("light");
const toggleTheme = () => {
  theme === "light" ? setTheme("dark") : setTheme("light");
};

export default toggleTheme;
