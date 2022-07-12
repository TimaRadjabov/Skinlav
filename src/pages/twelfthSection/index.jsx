import Button from "../../uikit/Button";
import calculator from "../../uikit/static/twelfth-section/calculator.svg";
import arrow from "../../uikit/static/first-section/arrow-icon.svg";
import "./twelfthSection.css";

const TwelfthSection = () => {
  return (
    <div className="wrapper">
      <div className="twelfth__body">
        <div className="text-container">
          <div className="twelfth__content">
            <h2 className="twelfth__title">Калькулятор чистой прибыли</h2>
            <h4 className="twelfth__subtitle">
              Выход на чистую прибыль в размере от 150 000 до 440 000 ₽ зависит
              от бизнес-модели и объёма продаж.
            </h4>
            <p className="twelfth__parag">
              Для получения результата, максимально приближённого к реальности,
              необходимо заполнить несколько полей.
            </p>
            <div className="twelfth__list">
              <div className="twelfth__item">
                <div className="twelfth__item-text">LAB</div>
              </div>
              <div className="twelfth__item">
                <div className="twelfth__item-text">LAB Care</div>
              </div>
              <div className="twelfth__item">
                <div className="twelfth__item-text">LAB plus</div>
              </div>
            </div>
          </div>
          <img src={calculator} alt="calculator" className="calculator" />
          <div className="thwelfth__profit">
            <div className="profit">
              <div className="profit__descr">Итого чистая прибыль в месяц:</div>
              <div className="profit__amount">1 647 000 ₽ </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="twelfth__cart">
          <div className="cart__content">
            <h2 className="cart__content-title">
              Выберите оптимальный вариант сотрудничества
            </h2>
            <h4 className="cart__content-subtitle">
              по франшизе Skinlav и запустите бизнес со стабильным доходом{" "}
            </h4>
            <div className="cart__content-btn">
              <Button children={"Получить расчёт прибыли"} icon={arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TwelfthSection;
