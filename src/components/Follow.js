import "./Follow.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
function Follow() {
  return (
    <div class="follow">
      Follow Microsoft
      <span>
        <AiFillFacebook class="social" color="blue" size="2.3rem" />
        <AiFillTwitterSquare class="social" color="#55acee" size="2.3rem" />
        <FaYoutubeSquare class="social" color="red" size="2.3rem" />
      </span>
    </div>
  );
}

export default Follow;
