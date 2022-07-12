import mari from "../../uikit/static/last-section/mari.svg";
import logo from "../../uikit/static/last-section/logo.svg";
import instagram from "../../uikit/static/last-section/instagram.jpg";
import vk from "../../uikit/static/last-section/vk.jpg";
import f5 from "../../uikit/static/last-section/f5.svg";
import icon from "../../uikit/static/header/contact-icon.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="text-container">
        <div className="footer__content">
          <div className="footer__adress">
            <div className="adress__descr">©Skinlav, 2020-2022 г.</div>
            <div className="adress__descr">
              ООО «Бьюти Лайф», <br />
              ИНН 1215107644
            </div>
            <div className="adress__mari">
              <img src={mari} alt="mari" className="adress__mari-img" />
              <div className="adress__descr">
                Россия, Республика Марий Эл, <br />
                г. Йошкар-Ола
              </div>
            </div>
            <div className="adress__descr">Политика конфиденциальности</div>
          </div>
          <div className="footer__logo">
            <img src={logo} alt="logo" className="footer__logo-img" />
            <div className="socials">
              <img src={instagram} alt="instagram" className="instagram" />
              <img src={vk} alt="vk" className="vk" />
            </div>
          </div>
          <div className="footer__phone">
            <div className="header__contact-phone">
              <div className="contact__icon">
                <img src={icon} alt="contact-icon" />
              </div>
              <div className="contact__number-body">
                <div className="contact__number">+7 (960) 096-93-33</div>
                <div className="header__contact-link">
                  <a href="/" className="contact__link">
                    Заказать звонок
                  </a>
                </div>
              </div>
            </div>
            <div className="franchise">
              <img src={f5} alt="f5" className="franchise__img" />
              <p className="franchise__descr">
                Упаковка и продвижение франшиз: «Франчайзинг5»
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
