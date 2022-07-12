import Title from "../../components/Title";
import Circle from "../../uikit/Circle";
import director from "../../uikit/static/third-section/director.svg";
import video from "../../uikit/static/third-section/video.jpg";
import polygon from "../../uikit/static/third-section/polygon.svg";
import topBackground from "../../uikit/static/third-section/logo-skinlav.svg";
import topQuote from "../../uikit/static/third-section/quote.svg";


import "./thirdSection.css";

const ThirdSection = () => {
  return (
    <section className="third__section">
      <div className="wrapper">
        <div className="wrapper__body-third">
          <div className="top__background-block">
            <div className="text-container">
              <div className="inner__block">
                <Title
                  title="С Кипра в Россию —"
                  subtitle="бренду Skinlav нет аналогов на отечественном рынке"
                  className="third__section-title"
                />
                <div className="third__section-descr">
                  <div className="descr__first-parag">
                    <h3 className="first-parag__title">
                      Я работал врачом анестезиологом-ревматологом,
                    </h3>
                    <p className="first-parag__text">
                      параллельно развивал свою медицинскую фирму и был
                      представителем косметического бренда «Белита Витэкс», где
                      познакомился со своими будущими партнёрами Еленой Кених и
                      Натальей Лавренёвой. Это была продукция класса массмаркет,
                      а{" "}
                      <span>
                        мне всегда хотелось работать с инновационной косметикой,
                        имеющей конкурентное преимущество перед другими
                        брендами.
                      </span>
                    </p>
                    <p className="first-parag__text">
                      В 2016 году после долгого сотрудничества с «Белита Витэкс»
                      Наталья переехала на Кипр, где стала работать в
                      косметологических компаниях по изготовлению косметики.
                    </p>
                    <p className="first-parag__text">
                      <span>
                        Здесь, на Кипре и родился бренд Натальи Skinlav.
                      </span>
                    </p>
                  </div>
                  <div className="director__block">
                    <div className="director__photo">
                      <img src={director} alt="director" />
                    </div>
                    <Circle
                      className="director__circle"
                      title="Олег Коноплев"
                      subtitle="Директор по развитию Skinlav в СНГ"
                    />
                  </div>
                  <div className="descr__second-parag">
                    <p className="first-parag__text">
                      С появлением и развитием{" "}
                      <span>косметического бренда Skinlav </span> мы с Еленой
                      активно наблюдали за продуктом, хотели убедиться в
                      проработанности продукта, что косметика, которую
                      производит Наталья — это интересно, это работает,{" "}
                      <span>это инновационный и трендовый продукт.</span>
                    </p>
                    <p className="first-parag__text">
                      Для этого Елена с командой поехала на обучение к Наталье
                      на Кипр, смотрела, как бизнес работает внутри, и{" "}
                      <span>лично убедилась в том, что продукт уникален,</span>
                      технологии отработаны, бизнес-модель работает и приносит
                      высокий доход. Тогда мы заинтересовались и получили право
                      заниматься Skinlav на территории России и СНГ.
                    </p>
                    <h3 className="first-parag__title">
                      Так, с 2020 года мы транслируем философию Skinlav в
                      России.
                    </h3>
                    <div className="descr__second-video">
                      <img src={video} alt="video" />
                      <div className="video__circle">
                        <div className="vide__circle-second">
                          <img src={polygon} alt="polygon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={topBackground}
            alt="topBackground"
            className="top__background"
          />
          <img src={topQuote} alt="topQuote" className="top__quote" />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;