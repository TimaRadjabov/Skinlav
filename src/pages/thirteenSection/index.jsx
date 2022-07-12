import "./thirteenthSection.css";


const ThirteenthSection = () => {
  return (
    <div className="wrapper">
      <div className="thirteenth__body">
        <div className="text-container">
          <div className="thirteenth__content">
            <h2 className="twelfth__title thirteenth__title">
              6 этапов запуска
            </h2>
            <h4 className="twelfth__subtitle thirteenth__subtitle">
              косметологического салона
            </h4>
            <p className="twelfth__parag thirteenth__parag">
              6 этапов запуска бизнеса будут пройдены поэтапно благодаря
              подробным инструкциям и непрерывной поддержке от команды головного
              офиса.
            </p>
            <div className="thirteenth__stages">
              <div className="thirteenth__stage">
                <div className="stage__title">
                  <h3 className="stage__main-title">1 этап</h3>
                  <p className="stage__subtitle">Оформление документов</p>
                </div>
                <div className="stage__content-body">
                  <div className="stage__content">
                    <div className="stage__content-number">01</div>
                    <p className="stage__content-descr">
                      Подписание договора, оплата паушального взноса, получение
                      внутренних регламентов и ознакомление, подача документов
                      на регистрацию ИП — 10 дней.
                    </p>
                  </div>
                </div>
              </div>
              <div className="thirteenth__stage">
                <div className="stage__title">
                  <h3 className="stage__main-title">2 этап</h3>
                  <p className="stage__subtitle">Подбор локации</p>
                </div>
                <div className="stage__content-body">
                  <div className="stage__content">
                    <div className="stage__content-number">02</div>
                    <p className="stage__content-descr">
                      Поиск, выбор помещения с учётом критериев сети и
                      лицензионных требованиий в формате LAB plus: 14 дней.
                    </p>
                  </div>
                  <div className="stage__content">
                    <div className="stage__content-number">03</div>
                    <p className="stage__content-descr">
                      Переговоры с собственником помещения и заключение договора
                      аренды: 5 дней.
                    </p>
                  </div>
                  <div className="stage__content">
                    <div className="stage__content-number">04</div>
                    <p className="stage__content-descr">
                      Разработка дизайн-проекта салона: 2 дня.
                    </p>
                  </div>
                  <div className="stage__content">
                    <div className="stage__content-number">05</div>
                    <p className="stage__content-descr">
                      Ремонт помещения: 14 дней.
                    </p>
                  </div>
                  <p className="stage__content-parag">
                    Головной офис предоставляет подробные рекомендации по выбору
                    и ремонту помещения с учётом требований СанПиН.
                  </p>
                </div>
              </div>
              <div className="thirteenth__stage">
                <div className="stage__title">
                  <h3 className="stage__main-title">3 этап</h3>
                  <p className="stage__subtitle">Маркетинг</p>
                </div>
                <div className="stage__content-body">
                  <div className="stage__content">
                    <div className="stage__content-number">06</div>
                    <p className="stage__content-descr">
                      Ремонт помещения: 14 дней.
                    </p>
                  </div>
                  <div className="stage__content">
                    <div className="stage__content-number">07</div>
                    <p className="stage__content-descr">
                      Настройка и заполнение CRM-системы совместно со
                      специалистами Головного офиса: 4 дня.
                    </p>
                  </div>
                  <div className="stage__content">
                    <div className="stage__content-number">08</div>
                    <p className="stage__content-descr">
                      Получение логина и пароля для входа в Instagram-аккаунт: 1
                      день.
                    </p>
                  </div>
                  <p className="stage__content-parag">
                    За 1 месяц до открытия косметологического центра
                    франчайзи-партнёр проводит офлайн маркетинговые мероприятия
                    в регионе, чтобы информировать население об открытии.
                    Головной офис настроит таргетированную и контекстную рекламу
                    для привлечения первых клиентов.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="thirteenth__button">
            <div className="thirteenth__button-descr">Смотреть все этапы</div>
            <div className="thirteenth__button-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirteenthSection;
