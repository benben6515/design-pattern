import React, { useState, useContext, createContext } from "react"

const ThemeContext = "dark"

const themes = {
  light: {
    color: "#fff",
  },
  dark: {
    color: "#000",
  },
}

// use custom hook
const useThemeContext = () => {
  const theme = useContext(ThemeContext)
  if (!theme) {
    throw new Error("useThemeContext must be used within ThemeProvider")
  }
  return theme
}

// app.tsx ---

interface ThemeContextInterface {
  theme: any
  toggleTheme: () => void
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const providerValue: ThemeContextInterface = {
    theme: themes[theme],
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  )
}

const Toggle = () => <div></div>
const List = () => <div></div>

export default ({ theme }) => (
  <div className={`App theme-${theme}`}>
    <ThemeProvider>
      <div>
        <Toggle />
        <List />
      </div>
    </ThemeProvider>
  </div>
)

// another component ---

// export default () => {
//   const theme = useThemeContext();
//   return <li style={theme.theme}>...</li>;
// };
