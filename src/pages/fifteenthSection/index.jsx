import Button from "../../uikit/Button";
import firstImg from "../../uikit/static/fifteenth-section/01.svg";
import secondImg from "../../uikit/static/fifteenth-section/02.svg";
import profile from "../../uikit/static/fifteenth-section/owner02.svg";
import icon from "../../uikit/static/fifteenth-section/icon.svg";
import owner from "../../uikit/static/fifteenth-section/owner.svg";
import plus from "../../uikit/static/fifteenth-section/plus.svg";
import logo from "../../uikit/static/fifteenth-section/logo.svg";
import arrow from "../../uikit/static/first-section/arrow-icon.svg";
import "./fifteenthSection.css";

const FifteenthSection = () => {
  return (
    <div className="wrapper">
      <div className="fifteenth__body">
        <div className="text-container">
          <div className="fifteenth__main-content">
            <div className="fifteenth__title">
              <h2 className="fifteenth__main-title">
                Обучение от главного косметолога и основателя бренда Skinlav
              </h2>
              <h4 className="fifteenth__subtitle">Натальи Лавреневой</h4>
            </div>
            <div className="fifteenth__content">
              <p className="fifteenth__first-descr">
                Индивидуальная косметика — безаналоговый продукт на российском
                рынке,{" "}
                <span>
                  поэтому для его производства требуется подготовка
                  специалистов.
                </span>
              </p>
              <p className="fifteenth__second-descr">
                Наталья Лавренева{" "}
                <span>
                  обучит уникальному методу тестирования кожи и разработки
                  косметики
                </span>{" "}
                для лица путём смешения готовой базы и бустера.
              </p>
              <div className="fifteenth__cards">
                <div className="fifteenth__card">
                  <div className="card__number-block">
                    <img
                      src={firstImg}
                      alt="firstImg"
                      className="number__block-img"
                    />
                    <h3 className="card__main-title">Онлайн-курс</h3>
                    <h4 className="card__subtitle">по тестированию кожи</h4>
                    <p className="fifteenth__card-descr">
                      Измерение специальной программой параметров кожи клиента,
                      расшифровка результатов, проведение диагностики, выявление
                      факторов, влияющих на состояние кожи и показателей,
                      нуждающихся в коррекции.
                    </p>
                  </div>
                </div>
                <div className="fifteenth__card">
                  <div className="card__number-block">
                    <img
                      src={secondImg}
                      alt="firstImg"
                      className="number__block-img"
                    />
                    <h3 className="card__main-title">Онлайн-курс</h3>
                    <h4 className="card__subtitle">
                      по созданию индивидуальных косметических средств
                    </h4>
                    <p className="fifteenth__card-descr">
                      Изучение готовых баз и бустеров, обучение технологии
                      изготовления кремов, разработка рецептов на основе
                      полученных результатов тестирования кожи клиента.
                    </p>
                  </div>
                </div>
              </div>
              <div className="fifteenth__about">
                <div className="fifteenth__profile-img">
                  <img src={profile} alt="profile" className="profile__img" />
                  <h3 className="profile__name">Наталья Лавренёва</h3>
                </div>
                <p className="about__descr">
                  Наталья <span>начинала свой путь</span> руководителем проекта
                  для ведущих косметических компаний Беларуси Bielita&Vite,
                  после переезда на Кипр работала{" "}
                  <span>
                    на должности начальника отдела исследований и разработок
                  </span>{" "}
                  в Neoderma Laboratories, дополнительно ко всему,
                  <span>получила специальное образование в Бельгии.</span>
                </p>
                <div className="profile__list">
                  <div className="profile__item">
                    <img src={icon} alt="icon" className="profile__item-icon" />
                    <p className="profile__item-descr">
                      Эксперт по безопасности косметики в ЕС
                    </p>
                  </div>
                  <div className="profile__item">
                    <img src={icon} alt="icon" className="profile__item-icon" />
                    <p className="profile__item-descr">
                      Член Европейской ассоциации токсикологов CCE (Cosmetics
                      Consultants Europe)
                    </p>
                  </div>
                  <div className="profile__item">
                    <img src={icon} alt="icon" className="profile__item-icon" />
                    <p className="profile__item-descr">
                      Разработчик инновационных космецевтических препаратов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={owner} alt="owner" className="owner__photo" />
        <img src={logo} alt="logo" className="profile__logo" />
        <div className="profile__circle">
          <img src={plus} alt="plus" className="profile__circle-icon" />
          <p className="profile__circle-descr">
            Дополнительно Наталья <span>проводит личную консультацию</span> по
            результатам усвоения обучающих материалов специалистами.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="twelfth__cart fifteenth__cart">
          <div className="cart__content fifteenth">
            <h2 className="cart__content-title">
              Получите комплексную поддержку
            </h2>
            <h4 className="cart__content-subtitle ">
              по освоению инновационных технологий тестирования кожи и создания
              рецептур косметических средств
            </h4>
            <div className="cart__content-btn fifteenth">
              <Button children={"Записаться на консультацию"} icon={arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FifteenthSection;
