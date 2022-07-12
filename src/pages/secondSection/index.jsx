import Title from "../../components/Title";
import backgroundImg from "../../uikit/static/second-section/bottle.jpg";
import cretiriaIcon from "../../uikit/static/second-section/city.svg";
import "./secondSection.css";
import LabCarusel from "../../components/LabCarusel/LabCarusel";

const SecondSection = () => {
  return (
    <section className="second__section">
      <div className="wrapper">
        <div className="wrapper__body">
          <div className="second__section-background">
            <img
              src={backgroundImg}
              alt="backgroundImg"
              className="second__section-background-img"
            />
          </div>
          <div className="text-container">
            <Title
              title="3 формата бизнеса с собственной лабораторией"
              subtitle="для изготовления косметики"
              className="second__section"
            />
            <div className="second__section-context">
              <div className="criteria">
                <div className="criteria__icon">
                  <img
                    src={cretiriaIcon}
                    alt="cretiriaIcon"
                    className="criteria__icon-item"
                  />
                </div>
                <h4 className="criteria__title">
                  Для открытия салона по любому из форматов сотрудничества
                  разработаны критерии по подбору помещения и локации:
                </h4>
                <ul className="criteria__descr-list">
                  <li className="criteria__descr-item">
                    Площадь от 70 м2, оптимальный вариант — от 100 до 130 м2
                  </li>
                  <li className="criteria__descr-item">
                    Презентабельный район, наличие парковки.
                  </li>
                  <li className="criteria__descr-item">
                    Расположение на одной из центральных улиц города для
                    привлечения внимания к вывеске со стороны проезжей части.
                  </li>
                </ul>
              </div>
              <div className="lab__carousel">
                <LabCarusel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
