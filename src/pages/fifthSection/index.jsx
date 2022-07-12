import Circle from "../../uikit/Circle";
import plus from "../../uikit/static/fifth-section/01.svg";
import sprite from "../../uikit/static/fifth-section/фото.jpg";
import "./fifthSection.css";

const FifthSection = () => {
  return (
    <section className="fifth__section">
      <div className="text-container">
        <div className="fifth__section-title">
          <h2 className="section-title">
            Активные природные ингредиенты, отсутствие консервантов
          </h2>
          <h4 className="section-subtitle">
            и другие преимущества косметики Skinlav
          </h4>
        </div>
        <div className="fifth__section-block">
          <div className="fifth__section-descr">
            <p className="fifth__section-text">
              Персональный рецепт для создания крема Skinlav{" "}
              <span>
                учитывает внешнюю среду, образ жизни и другие факторы, влияющие
                на состояние кожи клиента.
              </span>
            </p>
            <div className="fifth__section-list">
              <div className="fifth__section-item">
                <img src={plus} alt="plus" className="fifth__section-plus" />
                <p className="fifth__section-item-text">
                  Одной упаковки крема достаточно{" "}
                  <span>на 6 месяцев применения.</span>
                </p>
              </div>
              <div className="fifth__section-item">
                <img src={plus} alt="plus" className="fifth__section-plus" />
                <p className="fifth__section-item-text">
                  Изготовление в лабораторных условиях в соответствии с
                  <span>международным стандартом качества ISO 22716.</span>
                </p>
              </div>
              <div className="fifth__section-item">
                <img src={plus} alt="plus" className="fifth__section-plus" />
                <p className="fifth__section-item-text">
                  Использование сырья европейского качества и{" "}
                  <span>
                    отсутствие силиконов, красителей, продуктов переработки
                    нефти, поверхностно-активных веществ, вредных консервантов,
                    например, бензоата натрия и 1,2-гександиола.
                  </span>
                </p>
              </div>
              <div className="fifth__section-item">
                <img src={plus} alt="plus" className="fifth__section-plus" />
                <p className="fifth__section-item-text">
                  Использование <span>инновационной ламеллярной основы,</span>{" "}
                  схожей по строению с мембраной клетки кожи человека для
                  лёгкого проникновение активных ингредиентов — пептидов и живых
                  клеток.
                </p>
              </div>
              <div className="fifth__section-item">
                <img src={plus} alt="plus" className="fifth__section-plus" />
                <p className="fifth__section-item-text">
                  Применение для продления срока хранения{" "}
                  <span>безвредных для кожи стабилизаторов.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="fifth__section-photos">
            <img src={sprite} alt="sprite" className="fifth__section-img" />
            <Circle
              subtitle={`Индивидуальная формула средства`}
              bolt={`для каждого клиента`}
              className="fifth__section-circle"
              subtitleStyle="subtitle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FifthSection;
