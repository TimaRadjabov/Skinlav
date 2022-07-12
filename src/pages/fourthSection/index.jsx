import Circle from "../../uikit/Circle";
import owners from "../../uikit/static/fourth-section/owners.svg";
import fisrtItem from "../../uikit/static/fourth-section/01.svg";
import secondItem from "../../uikit/static/fourth-section/02.svg";
import './fourth.css';

const FourthSection = () => {

   return( 
      <section className="fourth__section">
      <div className="wrapper">
        <div className="fourth__section-body">
          <div className="text-container">
            <div className="fourth__photos">
            <img
              src={owners}
              alt="owners"
              className="fourth__section-owners"
            />
            <Circle
              title="Елена Кених"
              subtitle="Партнёр по развитию Skinlav в СНГ"
              className="owner__circle first"
            />
            <Circle
              title="Наталья Лавренёва"
              subtitle="Основатель бренда Skinlav "
              className="owner__circle second"
            />
            </div>
            <div className="fourth__section-block">
              <div className="fourth__section-descr">
                <div className="descr__text">
                  Сейчас компания{" "}
                  <span>развивает 2 основных направления.</span>
                </div>
                <div className="descr__ways-list">
                  <div className="descr__ways-item">
                    <img
                      src={fisrtItem}
                      alt="fisrtItem"
                      className="item__first"
                    />
                    <p className="item__first-parag">
                      Масштабирование и развитие{" "}
                      <span>офлайн-косметологических центров</span> по модели
                      франчайзинга.
                    </p>
                  </div>
                  <div className="descr__ways-item">
                    <img
                      src={secondItem}
                      alt="fisrtItem"
                      className="item__first"
                    />
                    <p className="item__first-parag">
                      Разработка технологии проведения{" "}
                      <span>онлайн-измерений</span> с последующим
                      изготовлением индивидуальных косметических средств.
                    </p>
                  </div>
                </div>
                <p className="descr__bottom-text">
                  Команда Skinlav рада поделиться собственным опытом и
                  наработками, чтобы вместе достичь поставленных целей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   )
}
export default FourthSection;