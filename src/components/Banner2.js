import "./Banner2.css";
import { AiOutlineRight } from "react-icons/ai";
function Banner2() {
  return (
    <div className="ban2">
      <div className="ban2-content">
        <h2>Microsoft Edge</h2>
        <p>
          World-className performance with more privacy, more productivity and
          more value while you browse
        </p>
        <button>
          <span>Download Now</span>
          <AiOutlineRight color="white" size="1rem" />
        </button>
      </div>
    </div>
  );
}

export default Banner2;
