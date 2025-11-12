import logo from "./logo.svg";
import "./App.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import HeaderBody from "./component/jsx/Header/HeaderBody";
import FooterBody from "./component/jsx/Footer/FooterBody";
import MainBody from "./component/jsx/MainBody/MainBody";

function App() {
  return (
    <div className="App-wrapper">
      <HeaderBody></HeaderBody>
      <MainBody></MainBody>
      <FooterBody></FooterBody>
    </div>
  );
}

export default App;
