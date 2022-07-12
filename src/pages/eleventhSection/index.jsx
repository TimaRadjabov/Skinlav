import Card from "../../components/Card";
import firstCardImg from "../../uikit/static/eleventh-section/01.jpg";
import secondCardImg from "../../uikit/static/eleventh-section/02.jpg";
import "./eleventhSection.css";

const EleventhSection = () => {
  const firstArr = [
    " Во время процедур и манипуляций происходит нарушение целостности кожи и слизистых оболочек.",
    "В салоне оказывают услуги по уходу за кожей лица, шеи и декольте с помощью аппарата IGRENA и проводят RF-лифтинг на аппарате LIPO.",
  ];
  const firstArrMore = [
    " Во время процедур и манипуляций происходит нарушение целостности кожи и слизистых оболочек.",
    "В салоне оказывают услуги по уходу за кожей лица, шеи и декольте с помощью аппарата IGRENA и проводят RF-лифтинг на аппарате LIPO.",
  ];
  const secondArr = [
    "Процедуры проводят без воздействия игл/ хирургических инструментов, что сохраняет целостность кожи.",
    " К этим методам относятся пластическая хирургия, инъекции ботокса, мезотерапия, биоревитализация, использование некоторых видов лазера.",
  ];
  const secondArrMore =[
    "Процедуры проводят без воздействия игл/ хирургических инструментов, что сохраняет целостность кожи.",
    " К этим методам относятся пластическая хирургия, инъекции ботокса, мезотерапия, биоревитализация, использование некоторых видов лазера.",
  ];
  return (
    <section className="eleventh__section">
      <div className="wrapper">
        <div className="text-container">
          <div className="eleventh__body">
            <h2 className="eleventh__title">
              2 направления <br /> косметологических процедур
            </h2>
            <div className="eleventh__content">
              <div className="eleventh__block">
                <p className="eleventh__first-parag">
                  Специалисты Skinlav проводят диагностику кожных покровов,
                  анализируют влияющие на состояние кожи факторы, такие как:
                  экологическая обстановка, образ жизни клиента, стрессы, и
                  назначаются процедуры, которые способны минимизировать
                  последствия данных факторов, улучшить состояние кожи и
                  сохранить результат на длительный срок.
                </p>
                <p className="eleventh__second-parag">
                  Инвазивные и неинвазивные косметологические процедуры успешно
                  заменяют хирургические методы, позволяя достичь желаемого
                  результата омоложения.
                </p>
                <Card arr={firstArr} moreArr={firstArrMore} src={firstCardImg} title="Неинвазивная косметология"/>
              </div>
              <div className="eleventh__block">
                <p className="eleventh__second-card-parag">
                  <span>
                    Франшиза предусматривает создание косметологических салонов
                    в 2-х вариантах
                  </span>{" "}
                  — без лицензии для проведения только неинвазивных процедур или
                  с оформлением лицензии для выполнения инвазивных процедур.
                </p>
                <Card arr={secondArr} moreArr={secondArrMore}  src={secondCardImg} title="Инвазивная косметология"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EleventhSection;
