import { useState } from "react";
import "./Card.css";

const Card = ({ arr, src, title, moreArr }) => {
  const [more, setMore] = useState(false);
  const handleClick = () => {
    setMore(!more);
  };

  let list = arr.map((item, i) => <p className="eleventh__card-parag" key={i}>{item}</p>);
  return (
    <div className={more ? "eleventh__card-active" : "eleventh__card"}>
      <img src={src} alt="firstCardImg" className="eleventh__card-img" />
      <div className="eleventh__card-content">
        <h3 className="eleventh__card-title">{title}</h3>
        {list}
        {more ? moreArr : null}
        <div className="sixth__section__link">
          {more ? (
            <button
              className="sixth__section__link-text eleventh"
              onClick={handleClick}
            >
              Свернуть
            </button>
          ) : (
            <button
              className="sixth__section__link-text eleventh"
              onClick={handleClick}
            >
              Смотреть все
            </button>
          )}

          <div className={more ? "sixth__section__link-arrow active" : "sixth__section__link-arrow eleventh"}></div>
        </div>
        <div className={more ? "" : "list__effect eleventh"}></div>
      </div>
    </div>
  );
};
export default Card;
