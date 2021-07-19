import "./Follow.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
function Follow() {
  return (
    <div className="follow">
      Follow Microsoft
      <span>
        <AiFillFacebook className="social" color="blue" size="2.3rem" />
        <AiFillTwitterSquare className="social" color="#55acee" size="2.3rem" />
        <FaYoutubeSquare className="social" color="red" size="2.3rem" />
      </span>
    </div>
  );
}

export default Follow;
