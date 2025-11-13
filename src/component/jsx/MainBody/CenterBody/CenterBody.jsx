import { useState } from "react";
import "../../../css/MainBody/CenterBody/CenterBody.css";
import middleArray from "../../../img/middelArray.png";
import leftArray from "../../../img/leftArray.png";
import InputTitle from "./InputTitle";

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
        <div className="settin_bar">
          <div>{pathLink}</div>
          <div
            style={{
              height: "100%",
              alignItems: "center",
              display: "flex",
              gap: "10px",
              marginLeft: "auto",
            }}
          >
            <img
              src={middleArray}
              className="arrayimg"
              alt="본문 가운데 정렬"
            />
            <img src={leftArray} className="arrayimg" alt="본문 왼쪽 정렬" />
          </div>
        </div>
      </div>
      <div className="CenterBody-warpper">
        <div
          className={`CenterBody-warpper-inbox ${isClose ? "collapsed" : ""}`}
        >
          <div className={`title_detail_wrapper`}>
            <InputTitle></InputTitle>
          </div>
        </div>
      </div>
    </>
  );
}

export default CenterBody;
