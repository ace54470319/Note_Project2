import logo from "./logo.svg";
import "./App.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import HeaderBody from "./component/jsx/Header/HeaderBody";
import FooterBody from "./component/jsx/Footer/FooterBody";
import MainBody from "./component/jsx/MainBody/MainBody";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light"); // 'dark' | 'light'

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="App-wrapper">
      <HeaderBody></HeaderBody>
      <MainBody></MainBody>
      <FooterBody toggleTheme={toggleTheme} theme={theme}></FooterBody>
    </div>
  );
}

export default App;
