import "./SecondSectionCard.css";

const SecondSectionCard = ({title, number, subtitle, firstParag, secondParag, propStyle}) => {
  return (
    <div className="second-section__card">
      <div className={`card__img-block ${propStyle}`}>
        <p className="card__title-text">{title}</p>
        <p className="card__number-text">{number}</p>
      </div>
      <div className="card__descr-block">
        <h3 className="card__descr-title">{subtitle}</h3>
        <p className="card__descr-par">
          {firstParag}
        </p>
        <p className="card__descr-par">
          {secondParag}
        </p>
      </div>
    </div>
  );
};

export default SecondSectionCard;