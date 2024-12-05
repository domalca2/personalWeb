import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const ThemeContext = createContext();

// Crear el proveedor del contexto
export const ThemeProvider = ({ children }) => {
  // Estado para manejar el tema (claro/oscuro)
  const [theme, setTheme] = useState("light");

  // Cargar el tema desde LocalStorage al montar el componente
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Cambiar el tema y guardarlo en LocalStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
