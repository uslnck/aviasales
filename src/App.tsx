import { useEffect, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleAllTransfers,
  toggleOneTransfer,
  toggleTwoTransfers,
  toggleThreeTransfers,
  toggleNoTransfers,
} from "./store/checkboxesSlice";
import { RootState } from "./store";

// interface CheckboxesState {
//   [key: string]: boolean;
// }

function Aviasales() {
  const [isPressed, setIsPressed] = useState(false);

  // const [checkboxes, setCheckboxes] = useState<CheckboxesState>({
  //   all: true,
  //   "0": false,
  //   "1": false,
  //   "2": false,
  //   "3": false,
  // });

  const dispatch = useDispatch();

  const checkboxAll = useSelector(
    (state: RootState) => state.checkboxes.allTransfersChecked
  );
  const checkboxOne = useSelector(
    (state: RootState) => state.checkboxes.oneTransferChecked
  );
  const checkboxTwo = useSelector(
    (state: RootState) => state.checkboxes.twoTransfersChecked
  );
  const checkboxThree = useSelector(
    (state: RootState) => state.checkboxes.threeTransfersChecked
  );
  const checkboxNo = useSelector(
    (state: RootState) => state.checkboxes.noTransfersChecked
  );

  const handleToggleAll = () => {
    dispatch(toggleAllTransfers());
  };

  const handleToggleOne = () => {
    dispatch(toggleOneTransfer());
  };

  const handleToggleTwo = () => {
    dispatch(toggleTwoTransfers());
  };

  const handleToggleThree = () => {
    dispatch(toggleThreeTransfers());
  };

  const handleToggleNo = () => {
    dispatch(toggleNoTransfers());
  };

  const handleCheapestPress = () => {
    console.log("Cheapest pressed");
  };

  const handleFastestPress = () => {
    console.log("Fastest pressed");
  };

  const handleOptimalPress = () => {
    console.log("Optimal pressed");
  };

  const handleShowMorePress = () => {
    console.log("Show more pressed");
  };

  useEffect(() => {
    setIsPressed(true);
  }, []);

  const btnClass = classNames("btn", {
    "btn-active": isPressed,
  });

  // const handleCheckboxToggle = (id: string) => {
  //   setCheckboxes((prevCheckboxes) => ({
  //     ...prevCheckboxes,
  //     [id]: !prevCheckboxes[id],
  //   }));
  // };

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
          <nav className="transfers">
            <h2 className="header">КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
            <ul className="options">
              <li className="option" onClick={handleToggleAll}>
                <input
                  type="checkbox"
                  id="all"
                  className="checkbox"
                  checked={checkboxAll}
                  readOnly
                />
                <label htmlFor="all" onClick={(e) => e.stopPropagation()}>
                  Все
                </label>
              </li>
              <li className="option" onClick={handleToggleNo}>
                <input
                  type="checkbox"
                  id="0"
                  className="checkbox"
                  checked={checkboxNo}
                  readOnly
                />
                <label htmlFor="0" onClick={(e) => e.stopPropagation()}>
                  Без пересадок
                </label>
              </li>
              <li className="option" onClick={handleToggleOne}>
                <input
                  type="checkbox"
                  id="1"
                  className="checkbox"
                  checked={checkboxOne}
                  readOnly
                />
                <label htmlFor="1" onClick={(e) => e.stopPropagation()}>
                  1 пересадка
                </label>
              </li>
              <li className="option" onClick={handleToggleTwo}>
                <input
                  type="checkbox"
                  id="2"
                  className="checkbox"
                  checked={checkboxTwo}
                  readOnly
                />
                <label htmlFor="2" onClick={(e) => e.stopPropagation()}>
                  2 пересадки
                </label>
              </li>
              <li className="option" onClick={handleToggleThree}>
                <input
                  type="checkbox"
                  id="3"
                  className="checkbox"
                  checked={checkboxThree}
                  readOnly
                />
                <label htmlFor="3" onClick={(e) => e.stopPropagation()}>
                  3 пересадки
                </label>
              </li>
            </ul>
          </nav>
          <div className="tickets-container">
            <nav className="costs">
              <ul className="options">
                <li>
                  <button
                    onClick={handleCheapestPress}
                    className={`option ${btnClass}`}
                  >
                    САМЫЙ ДЕШЕВЫЙ
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleFastestPress}
                    className={`option ${btnClass}`}
                  >
                    САМЫЙ БЫСТРЫЙ
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleOptimalPress}
                    className={`option ${btnClass}`}
                  >
                    ОПТИМАЛЬНЫЙ
                  </button>
                </li>
              </ul>
            </nav>
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
        </div>
      </main>
    </>
  );
}

export default Aviasales;
