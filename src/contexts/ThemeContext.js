import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const ThemeContext = createContext();

// Crear el proveedor del contexto
export const ThemeProvider = ({ children }) => {
  // Estado para manejar el tema (claro/oscuro)
  const [theme, setTheme] = useState(() =>
    {const savedTheme = localStorage.getItem("theme");
      console.log("Tema guardado en localStorage al cargar:", savedTheme); 
      if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
      }
      return "light"; 
  });

  // Cargar el tema desde LocalStorage al montar el componente
  useEffect(() => {
    // const savedTheme = localStorage.getItem("theme");
    document.body.className = theme; 
    localStorage.setItem("theme", theme); 
    console.log("Clase aplicada al body:", theme);
  }, [theme]);

  // Cambiar el tema y guardarlo en LocalStorage
  const toggleTheme = () => {
    console.log("dentro de toggleTheme");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    console.log("Tema guardado en localStorage:", newTheme); 
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
