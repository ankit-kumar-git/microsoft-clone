import "./Section4.css";
import { AiOutlineRight } from "react-icons/ai";
function Section4() {
  return (
    <div className="section-4">
      <div className="section4-content">
        <h2>Microsoft's response to COVID 19</h2>
        <p>
          Read how we’re responding to the COVID-19 outbreak, and get resources
          to help.
        </p>
        <button>
          <span>Learn More</span>
          <AiOutlineRight color="black" size="1rem" />
        </button>
      </div>
    </div>
  );
}

export default Section4;
