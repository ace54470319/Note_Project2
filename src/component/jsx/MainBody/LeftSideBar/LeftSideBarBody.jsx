import "../../../css/MainBody/LeftSideBar/LeftSideBarBody.css";
import CloseButtonImg from "../../../img/CloseSideBarIcon.png";

function LeftSideBarBody({ onToggle, isClose }) {
  return (
    <>
      <div className="LeftSideBar-warpper">
        <div
          className={`LeftSideBar-warpper-inbox ${isClose ? "collapsed" : ""}`}
        >
          <div className={`Detail ${isClose ? "collapsed" : ""}`}>
            <div className={`Title ${isClose ? "collapsed" : ""}`}>
              <span
                className={`Title_Font ${isClose ? "collapsed" : ""}`}
                style={{
                  width: "70%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                내 라이브러리
              </span>
              <div className="flex-spacer" />
              <img
                onClick={onToggle}
                className={` close-icon CloseBtn ${isClose ? "collapsed" : ""}`}
                src={CloseButtonImg}
                alt="창 닫기"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSideBarBody;
