import { useState } from "react";
import "../../../css/MainBody/LeftSideBar/TagSearch.css";
function TagSearch({ isClose }) {
  const [TagList] = useState([
    "기본 태그1",
    "기본 태그2",
    "태그3",
    "태그4",
    "태그5",
    "태그6",
    "태그7",
  ]);

  const handleWheel = (e) => {
    const container = e.currentTarget;
    // 세로 스크롤 값을 가로 스크롤로 사용
    container.scrollLeft += e.deltaY;
    e.preventDefault(); // 페이지 전체 세로 스크롤 막기 (필요하면 유지)
  };

  return (
    <>
      {!isClose && (
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            height: "33px",
          }}
        >
          <div className="close_Tag"> ✖ </div>
          <div className="Tag-wrapper" onWheel={handleWheel}>
            {TagList.map((tag, idx) => (
              <div key={idx} className="Tag-Box">
                {tag}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default TagSearch;
