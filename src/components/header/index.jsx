import logo from "../../uikit/static/header/logo.svg";
import icon from "../../uikit/static/header/contact-icon.svg";
import "./Header.css";


const Header = ({ className }) => {
  return (
    <div className={className}>
      <div className="text-container">
        <div className="header__body">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__text">
            Инновационный формат beauty-бизнеса
          </div>
          <div className="header__contact contact">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
