import { useState } from "react";
import "../../css/Footer/FooterBody.css";
import DarkModeSwitch from "./DarkModeSwitch";

function FooterBody({ toggleTheme, theme }) {
  const [version, setVserion] = useState("1.0");

  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-wrapper-inbox">
          <DarkModeSwitch
            toggleTheme={toggleTheme}
            theme={theme}
          ></DarkModeSwitch>
          <div style={{ opacity: "0.3", fontSize: "13px" }}>ver.{version}</div>
        </div>
      </div>
    </>
  );
}

export default FooterBody;
