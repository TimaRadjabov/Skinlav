import Cosmetic from "../../components/Cosmetics";

import "./eighthSection.css";

const EighthSection = () => {
  return (
    <section className="eighth__section">
      <div className="wrapper">
        <div className="eighth__body">
          <div className="text-container">
            <div className="eighth__title">
              <h2 className="eighth__main-title">
                Производство косметики <br />
                по индивидуальной формуле
              </h2>
              <h4 className="eighth__subtitle">для каждого клиента</h4>
            </div>
            <p className="eighth__descr">
              Как происходит{" "}
              <span>подбор и изготовление индивидуальной косметики:</span>
            </p>
            <div className="eighth__process">
              <div className="process__item">
                <div className="process__number">01</div>
                <div className="process__item-link">
                  <a href="/" className="process__link">
                    Измерение 11 параметров кожи на специальном оборудовании
                  </a>
                </div>
              </div>
              <div className="process__item">
                <div className="process__number">02</div>
                <div className="process__item-link">
                  <a href="/" className="process__link">
                    Диагностика кожи по полученным показателям
                  </a>
                </div>
              </div>
              <div className="process__item">
                <div className="process__number">03</div>
                <div className="process__item-link">
                  <a href="/" className="process__link">
                    Производство косметического продукта
                  </a>
                </div>
              </div>
            </div>
            <Cosmetic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EighthSection;