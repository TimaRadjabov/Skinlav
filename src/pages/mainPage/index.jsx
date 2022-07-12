import Header from "../../components/header";
import "./mainPage.css";
import Authorizaton from "../../components/Authorization";
import Title from "../../components/Title";

const MainPage = () => {
  return (
    <div className="wrapper">
      <Header className={"header"} />
      <main className="main">
        <div className="text-container">
          <section className="first-section">
            <div className="first-section__info">
              <Title
                title="Откройте косметологический салон по франшизе Skinlav"
                subtitle="с изготовлением персонального косметического средства в лабораторных
        условиях"
              />
              <p className="first-section__descr">
                3 бизнес-модели для выхода
                <span>
                  на чистую прибыль от 150 000 ₽ до 500 000 ₽ ежемесячно
                </span>
                при поддержке команды Skinlav
              </p>
            </div>
            <div className="first-section__cards">
              <div className="card">
                <div className="card__number">01</div>
                <div className="card__descr">
                  <span>Передача технологии</span> проведения тестирования кожи
                  и изготовления косметики
                </div>
              </div>
              <div className="card second">
                <div className="card__number">02</div>
                <div className="card__descr second">
                  3 формата сотрудничества:
                  <span>LAB, LAB Care и LAB plus</span>
                </div>
              </div>
              <div className="card third">
                <div className="card__number">03</div>
                <div className="card__descr third">
                  <span>От 1 900 до 9 000 рублей:</span> средний чек
                  индивидуальной косметики
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="form-section">
          <div className="container">
            <div className="section__form-body">
              <div className="text-container">
                <h4 className="section__form-title">
                  Получите доступ к PDF-презентации, чтобы узнать подробнее о
                  франшизе Skinlav
                </h4>
                <Authorizaton
                  className="section__form"
                  children="Получить презентацию"
                  
                />
                <p className="section__form-descr">
                  Я подтверждаю, что ознакомлен и даю согласие на обработку
                  персональных данных на условиях и для целей, определяемых{" "}
                  <a href="/">Политикой конфиденциальност</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
