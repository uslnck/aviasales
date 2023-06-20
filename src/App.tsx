import Filters from "./components/filters";
import Transfers from "./components/transfers";

function Aviasales() {
  const handleShowMorePress = () => {
    console.log("Show more pressed");
  };

  return (
    <>
      <header>
        <div className="header-logo-container">
          <img src="background.svg" className="background"></img>
          <img src="plane.svg" className="plane"></img>
        </div>
      </header>
      <main>
        <div className="main-container">
          {/*вне компонентов только хедер, мейн, и их контейнеры. запихнуть фильтр и показать ещё как часть тикет листа, он будет из 3 компонентов состоятьЖ фильтра, фабрики тикетов, кнопки*/}
          <Transfers />
          <div className="tickets-container">
            <Filters />
            {/* start <TicketList />*/}
            <div className="ticket">
              <div className="price-company-container">
                <span className="price">13 400 Р</span>
                <img className="company" src="s7-logo.svg"></img>
              </div>
              <div className="route-container">
                <div className="route-hours">
                  <span className="route">MOW – HKT</span>
                  <span className="hours">10:45 – 08:00</span>
                </div>
                <div className="flight-time">
                  <span className="flight">В ПУТИ</span>
                  <span className="time">21ч 15м</span>
                </div>
                <div className="change-cities">
                  <span className="change">2 ПЕРЕСАДКИ</span>
                  <span className="cities">HKG, JNB</span>
                </div>
              </div>
              <div className="route-container">
                <div className="route-hours">
                  <span className="route">MOW – HKT</span>
                  <span className="hours">10:45 – 08:00</span>
                </div>
                <div className="flight-time">
                  <span className="flight">В ПУТИ</span>
                  <span className="time">21ч 15м</span>
                </div>
                <div className="change-cities">
                  <span className="change">2 ПЕРЕСАДКИ</span>
                  <span className="cities">HKG, JNB</span>
                </div>
              </div>
            </div>
            <button className="more-tickets" onClick={handleShowMorePress}>
              ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
            </button>
          </div>
          {/*start <TicketList />*/}
        </div>
      </main>
    </>
  );
}

export default Aviasales;
