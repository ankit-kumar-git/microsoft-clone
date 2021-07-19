import "./Section1.css";
import { SiMicrosoft } from "react-icons/si";
import { RiXboxLine } from "react-icons/ri";
import { TiVendorMicrosoft } from "react-icons/ti";
function Section1() {
  return (
    <div className="section1-container">
      <div className="section1-contain">
        <SiMicrosoft className="icon" size="2.7rem" />
        <p>Choose your Microsoft 365</p>
      </div>
      <div className="section1-contain">
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pndL?ver=5217&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt=""
        />
        <p>Explore surface devices</p>
      </div>
      <div className="section1-contain">
        <RiXboxLine className="icon" size="2.7rem" />
        <p>Buy Xbox games</p>
      </div>
      <div className="section1-contain">
        <TiVendorMicrosoft className="icon" size="2.7rem" />
        <p>Get Windows 10</p>
      </div>
    </div>
  );
}

export default Section1;
