import "../../../css/MainBody/CenterBody/CenterBody.css";

function CenterBody() {
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
        폴더 / 폴더 / 파일.md
      </div>
      <div className="CenterBody-warpper">
        <div className="CenterBody-warpper-inbox"></div>
      </div>
    </>
  );
}

export default CenterBody;
