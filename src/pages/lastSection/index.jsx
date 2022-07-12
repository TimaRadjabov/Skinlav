import Authorizaton from "../../components/Authorization";
import "./lastSection.css";

const LastSection = () => {
  return (
    <div className="wrapper">
      <div className="last__body">
        <div className="text-container">
          <div className="last__content">
            <h2 className="last__title">Применяйте уникальные методы</h2>
            <h4 className="last__subtitle">
              тестирования кожи и создания индивидуальных уходовых средств в
              собственном косметологическом центре Skinlav
            </h4>
            <p className="last__descr">
              Сильная команда управляющей компании сопровождает на всех этапах
              запуска бизнеса, делится базой знаний и накопленным опытом.
            </p>
            <p className="last__descr-second">
              Обучающая программа, детальный план старта и поддержка по ключевым
              направлениям помогут открыть прибыльный бизнес с чистой
              ежемесячной прибылью от 150 000 до 400 000 ₽
            </p>
          </div>
        </div>
        <div className="container">
          <div className="last__form-block">
            <p className="last__form-descr">
              Получите доступ к PDF-презентации, чтобы узнать подробнее о
              франшизе Skinlav
            </p>
            <Authorizaton
              children="Получить ПРЕЗЕНТАЦИЮ"
              className="last__form"
            />
            <p className="last__form-text">
              Я подтверждаю, что ознакомлен и даю согласие на обработку
              персональных данных на условиях и для целей, определяемых
              Политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LastSection;
