import { useState } from "react";
import "../../../css/MainBody/CenterBody/CenterBody.css";

function CenterBody({ onToggle, isClose }) {
  const [pathLink, setPathLink] = useState("폴더 / 폴더 / 파일.md");
  return (
    <>
      <div
        style={{
          marginLeft: "10px",
          color: "#616161",
          fontSize: "17px",
          marginBottom: "10px",
        }}
      >
        {pathLink}
      </div>
      <div className="CenterBody-warpper">
        <div
          className={`CenterBody-warpper-inbox ${isClose ? "collapsed" : ""}`}
        ></div>
      </div>
    </>
  );
}

export default CenterBody;
