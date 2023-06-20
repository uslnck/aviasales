import "./ticket.scss";

function Ticket() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
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
  );
}

export default Ticket;
