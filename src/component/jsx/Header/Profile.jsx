import { useState } from "react";
import "../../css/Header/Profile.css";
import profileImg from "../../img/pochita.gif";

function Profile() {
  const [userid, setUserId] = useState("ace602386");

  return (
    <>
      <div className="profile-wrapper">
        <div className="profile-img">
          <img
            style={{ height: "120%", objectFit: "cover" }}
            src={profileImg}
            alt=""
          />
        </div>
        <div className="profile-font">{userid}</div>
      </div>
    </>
  );
}

export default Profile;
