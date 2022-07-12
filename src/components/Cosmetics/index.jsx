import circle from "../../uikit/static/eighth-section/circle.svg";
import "./Cosmetic.css";
import DimensionCarusel from "../UniversalCarusel/DimensionCarusel/DimensionCarusel";

const Cosmetic = () => {
  return (
    <div className="text-container">
      <div className="eighth__content">
        <div className="eighth__content-descr">
          <div className="eighth__content-title">
            <div className="eighth__content-number">01</div>
            <div className="eighth__content-main-title">
              Измерение 11 параметров кожи на специальном оборудовании
            </div>
          </div>
          <div className="eighth__content-list">
            <div className="eighth__content-item">
              <img src={circle} alt="" className="eighth__content-img" />
              <p className="eighth__content-text">
                уровень увлажнения и сохранения влаги;
              </p>
            </div>
            <div className="eighth__content-item">
              <img src={circle} alt="" className="eighth__content-img" />
              <p className="eighth__content-text">
                чувствительность и пигментация;
              </p>
            </div>
            <div className="eighth__content-item">
              <img src={circle} alt="" className="eighth__content-img" />
              <p className="eighth__content-text">жирность и эластичность;</p>
            </div>
            <div className="eighth__content-item">
              <img src={circle} alt="" className="eighth__content-img" />
              <p className="eighth__content-text">кислотно-щелочной баланс;</p>
            </div>
            <div className="eighth__content-item">
              <img src={circle} alt="" className="eighth__content-img" />
              <p className="eighth__content-text">
                уровень сухости и шелушения кожи;
              </p>
            </div>
            <div className="eighth__content-item">
              <img src={circle} alt="" className="eighth__content-img" />
              <p className="eighth__content-text">глубина морщин, пор;</p>
            </div>
            <div className="eighth__content-item">
              <img src={circle} alt="" className="eighth__content-img" />
              <p className="eighth__content-text">
                состояние капилляров и липидного барьера.
              </p>
            </div>
          </div>
          <p className="eighth__content-paragh">
            Специальная программа сразу выводит на экран компьютера результаты
            показателей с расшифровками, поэтому любой человек после небольшого
            обучения сможет проводить измерения и расшифровывать клиенту
            результаты исследований.
          </p>
        </div>
        <DimensionCarusel />
      </div>
    </div>
  );
};
export default Cosmetic;
