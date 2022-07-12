import Button from "../../uikit/Button";
import arrow from "../../uikit/static/first-section/arrow-icon.svg";
import magazine from "../../uikit/static/tenth-section/magazine.svg";
import file from "../../uikit/static/tenth-section/file.svg";
import "./tenthSection.css";


const TenthSection = () => {
  return (
    <section className="tenth__section">
      <div className="wrapper">
        <div className="container">
          <div className="tenth__body">
            <img src={magazine} alt="magazine" className="tenth__magazine" />
            <div className="tenth__circle">
              <div className="tenth__circle-content">
                <img src={file} alt="file" className="circle__file" />
                <p className="tenth__circle-text">PDF-файл</p>
              </div>
            </div>
            <div className="text-container">
              <div className="tenth__text">
                <div className="tenth__content">
                  <h2 className="tenth__title">
                    Получите презентацию <br />о франшизе Skinlav
                  </h2>
                  <div className="tenth__button">
                    <Button
                      type="submit"
                      children="Получить информацию"
                      icon={arrow}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TenthSection;