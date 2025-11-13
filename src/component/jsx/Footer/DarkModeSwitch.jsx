import "../../css/Footer/DarkmodeSwitch.css";
import moon from "../../img/moon.png";
import sun from "../../img/sun.png";
function DarkModeSwitch({ toggleTheme, theme }) {
  const circleClass = theme === "dark" ? "dark" : "light";

  console.log(`inCircle ${theme === "light" ? "light" : "dark"}`);

  return (
    <>
      <div className="Dark-Light-Switch">
        <div onClick={toggleTheme} className={`inCircle ${circleClass}`}></div>

        <div className="moon_sun_img">
          <img src={sun} className="sunImg" alt="" />
          <img src={moon} className="moonImg" alt="" />
        </div>
      </div>
    </>
  );
}

export default DarkModeSwitch;
