import { useState } from "react";
import "../../../css/MainBody/LeftSideBar/TagSearch.css";
function TagSearch({ isClose }) {
  const [TagList, setTagList] = useState([
    "기본 태그1",
    "기본 태그2",
    "태그3",
    "태그4",
    "태그5",
    "태그6",
    "태그7",
  ]);

  const [inputValue, setInputValue] = useState("");
  const TagPlusHandler = () => {
    if (inputValue.trim() === "") return; // 빈값 방지

    setTagList((prev) => [...prev, inputValue]);
    setInputValue(""); // 입력창 초기화
  };

  const DeleteTagHandler = (index) => {
    setTagList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleWheel = (e) => {
    const container = e.currentTarget;
    // 세로 스크롤 값을 가로 스크롤로 사용
    container.scrollLeft += e.deltaY;
    e.preventDefault(); // 페이지 전체 세로 스크롤 막기 (필요하면 유지)
  };

  return (
    <>
      <div>
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
                  <div
                    style={{ marginLeft: "auto" }}
                    className="deleteTag"
                    onClick={() => DeleteTagHandler(idx)}
                  >
                    ✖
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isClose && (
          <div className="TagPlus-wrapper">
            <div className="TagPlus">
              <input
                type="text"
                className="inputTag"
                placeholder="태그 입력"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="PlusBtn" onClick={TagPlusHandler}>
                ╋
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TagSearch;
