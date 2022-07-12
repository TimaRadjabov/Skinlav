import firstIcon from "../../uikit/static/sixteenth-section/001.svg";
import secondIcon from "../../uikit/static/sixteenth-section/02.svg";
import thirdIcon from "../../uikit/static/sixteenth-section/03.svg";
import fourthIcon from "../../uikit/static/sixteenth-section/04.svg";
import dot from "../../uikit/static/sixteenth-section/dot.svg";
import "./sixteenthSection.css";

const SixteenthSection = () => {
  return (
    <div className="wrapper">
      <div className="sixteenth__body">
        <div className="text-container">
          <h2 className="sixteenth__title">4 направления сопровождения</h2>
          <div className="sixteenth__container">
            <div className="left__side">
              <p className="left__side-parag">
                Эксперты управляющей компании поддерживают во время и после
                открытия косметологического центра:
              </p>
              <div className="sixteenth__card">
                <div className="card__inner">
                  <div className="sixteenth__card-title">
                    <h2 className="sixteenth__card__main-title">
                      Операционная деятельность
                    </h2>
                    <img
                      src={firstIcon}
                      alt="firstIcon"
                      className="sixteenth__card__icon"
                    />
                  </div>
                  <div className="sixteenth__card-descr">
                    <img src={dot} alt="dot" className="card__descr-icon" />
                    <p className="card__descr-parag">
                      Подключение к корпоративному чату для коммуникации с
                      собственниками бренда и персональным куратором по всем
                      возникающим вопросам.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sixteenth__card">
                <div className="card__inner">
                  <div className="sixteenth__card-title">
                    <h2 className="sixteenth__card__main-title">Маркетинг</h2>
                    <img
                      src={secondIcon}
                      alt="firstIcon"
                      className="sixteenth__card__icon"
                    />
                  </div>
                  <div className="sixteenth__card-descr">
                    <img src={dot} alt="dot" className="card__descr-icon" />
                    <p className="card__descr-parag">
                      Консультации, актуализация и передача технологий
                      офлайн-маркетинга.
                    </p>
                  </div>
                  <div className="sixteenth__card-descr">
                    <img src={dot} alt="dot" className="card__descr-icon" />
                    <p className="card__descr-parag">
                      Обновление и передача рекламных материалов,
                      консультационная поддержка.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right__side">
              <div className="sixteenth__card">
                <div className="card__inner">
                  <div className="sixteenth__card-title">
                    <h2 className="sixteenth__card__main-title">Продукт</h2>
                    <img
                      src={thirdIcon}
                      alt="firstIcon"
                      className="sixteenth__card__icon"
                    />
                  </div>
                  <div className="sixteenth__card-descr">
                    <img src={dot} alt="dot" className="card__descr-icon" />
                    <p className="card__descr-parag">
                      Консультации, актуализация и передача новых технологий
                      оказания услуг.
                    </p>
                  </div>
                  <div className="sixteenth__card-descr">
                    <img src={dot} alt="dot" className="card__descr-icon" />
                    <p className="card__descr-parag">
                      Своевременная поставка баз и бустеров для изготовления
                      индивидуальных кремов и лосьонов
                    </p>
                  </div>
                  <div className="sixteenth__card-descr">
                    <img src={dot} alt="dot" className="card__descr-icon" />
                    <p className="card__descr-parag">
                      Консультации, обновление и передача технологий обучения
                      специалистов по видам услуг и продуктам.
                    </p>
                  </div>
                  <div className="sixteenth__card-descr">
                    <img src={dot} alt="dot" className="card__descr-icon" />
                    <p className="card__descr-parag">
                      Периодическое корпоративное международное обучение от
                      основателя бренда Натальи Лавреневой.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sixteenth__card">
                <div className="card__inner">
                  <div className="sixteenth__card-title">
                    <h2 className="sixteenth__card__main-title">Продажи</h2>
                    <img
                      src={fourthIcon}
                      alt="firstIcon"
                      className="sixteenth__card__icon"
                    />
                  </div>
                  <div className="sixteenth__card-descr">
                    <img src={dot} alt="dot" className="card__descr-icon" />
                    <p className="card__descr-parag">
                      Разработка новых и передача франчайзи-партнёрам технологий
                      продаж, проверенных на опыте головной компании.
                    </p>
                  </div>
                  <div className="sixteenth__card-descr">
                    <img src={dot} alt="dot" className="card__descr-icon" />
                    <p className="card__descr-parag">
                      Актуализация и транслирование стандартов обслуживания
                      клиентов на всех участников сети.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SixteenthSection;
