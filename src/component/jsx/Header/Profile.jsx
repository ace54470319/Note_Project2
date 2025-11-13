import { useState, useRef } from "react";
import "../../css/Header/Profile.css";
import profileImg from "../../img/profileIcon.png";

function Profile() {
  const [userid, setUserId] = useState("ace602386");
  const [selectedImg, setSelectedImg] = useState(profileImg);
  const fileInputRef = useRef(null);

  // 이미지 클릭 시 파일 선택창 열기
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // 파일 선택 시 이미지 미리보기로 변경
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImg(imageUrl);
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-img" onClick={handleImageClick}>
        <div className="plus_icon">+</div>
        <img
          className="profile_img"
          style={{ height: "120%", objectFit: "cover", cursor: "pointer" }}
          src={selectedImg}
          alt="profile"
        />
        {/* 숨겨진 파일 업로드 input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
      <div className="profile-font">{userid}</div>
    </div>
  );
}

export default Profile;
