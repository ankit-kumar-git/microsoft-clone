import "./Cards.css";
import { AiOutlineRight } from "react-icons/ai";
function Cards({ img, heading, para, btn, btn2, isHidden }) {
  return (
    <div class="cards">
      <div className="card-upper">
        <img src={img} alt="" />
      </div>
      <div className="card-lower">
        <h2>{heading}</h2>
        <p>{para}</p>
        <button>
          <span>{btn}</span>
          <AiOutlineRight color="blue" size="1rem" />
        </button>
        {!isHidden ? (
          <button>
            <span>{btn2}</span>
            <AiOutlineRight color="blue" size="1rem" />
          </button>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default Cards;
