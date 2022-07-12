import btns from "../../uikit/static/sixth-section/btns.svg";
import clients from "../../uikit/static/nineth-section/click.svg";
import gisOne from "../../uikit/static/nineth-section/01.jpg";
import gisTwo from "../../uikit/static/nineth-section/02.jpg";
import gisThree from "../../uikit/static/nineth-section/03.jpg";
import "./ninethSection.css";

const NinethSection = () => {
  return (
    <section className="nineth__section">
      <div className="nineth__body">
        <div className="text-container">
          <div className="nineth-content">
            <h2 className="nineth__title">
              Мнения клиентов <br /> о Skinlav
            </h2>
            <p className="nineth__decsr">
              <span>О качестве</span> косметических средств и{" "}
              <span>высоком уровне</span> сервиса клиенты делятся на
              геолокационных сервисах. Вот лишь некоторые из отзывов:
            </p>
          </div>
        </div>
        <div className="nineth__img">
        <img src={btns} alt="btns" className="nineth__first" />
          <img src={gisOne} alt="gisOne" className="nineth__first" />
          <img src={gisTwo} alt="gisTwo" className="nineth__first" />
          <img src={gisThree} alt="gisThree" className="nineth__first" />
        </div>
        <img src={clients} alt="clients" className="nineth__clients" />
      </div>
    </section>
  );
};
export default NinethSection;
