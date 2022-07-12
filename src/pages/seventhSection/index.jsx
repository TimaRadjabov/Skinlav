import { useState } from "react";
import GetModal from "../../modals/GetModal/GetModal";
import Button from "../../uikit/Button";
import arrow from "../../uikit/static/first-section/arrow-icon.svg";
import "./seventhSection.css";

const SeventhSection = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(true);
  }

  const handleClose =()=>{
    setClick(false)
  }
  return (
    <section className="seventh__section">
      <div className="wrapper">
        <div className="container">
          <div className="seventh__body">
            <div className="text-conteiner">
              <div className="seventh__content">
                <h2 className="seventh__title">
                  Узнайте больше <br />о секретах производства индивидуальной
                  косметики
                </h2>
                <div className="seventh__button">
                  <Button type="submit" children="Узнать больше" icon={arrow} onClick={handleClick}/>
                </div>
                <GetModal isOpen={click} onClose={handleClose}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SeventhSection;
