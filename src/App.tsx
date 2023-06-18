import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import classNames from "classnames";

import {
  toggleAllTransfers,
  toggleZeroTransfers,
  toggleOneTransfer,
  toggleTwoTransfers,
  toggleThreeTransfers,
} from "./store/checkboxesSlice";
import { setCheapest, setFastest, setOptimal } from "./store/filtersSlice";

function Aviasales() {
  const {
    allTransfersChecked: checkboxAll,
    zeroTransfersChecked: checkboxZero,
    oneTransferChecked: checkboxOne,
    twoTransfersChecked: checkboxTwo,
    threeTransfersChecked: checkboxThree,
  } = useSelector((state: RootState) => state.checkboxes);

  const { cheapestFilter, fastestFilter, optimalFilter } = useSelector(
    (state: RootState) => state.filters
  );

  const btnClass = classNames("filter", {
    active: cheapestFilter || fastestFilter || optimalFilter, ////////////
  });

  const dispatch = useDispatch();

  const handleToggleAll = () => {
    dispatch(toggleAllTransfers());
  };

  const handleToggleZero = () => {
    const isCheckAll =
      !checkboxZero && checkboxOne && checkboxTwo && checkboxThree;
    dispatch(toggleZeroTransfers({ all: isCheckAll }));
  };

  const handleToggleOne = () => {
    const isCheckAll =
      checkboxZero && !checkboxOne && checkboxTwo && checkboxThree;
    dispatch(toggleOneTransfer({ all: isCheckAll }));
  };

  const handleToggleTwo = () => {
    const isCheckAll =
      checkboxZero && checkboxOne && !checkboxTwo && checkboxThree;
    dispatch(toggleTwoTransfers({ all: isCheckAll }));
  };

  const handleToggleThree = () => {
    const isCheckAll =
      checkboxZero && checkboxOne && checkboxTwo && !checkboxThree;
    dispatch(toggleThreeTransfers({ all: isCheckAll }));
  };

  const handleCheapestPress = () => {
    dispatch(setCheapest());
    console.log("Cheapest pressed");
  };

  const handleFastestPress = () => {
    dispatch(setFastest());
    console.log("Fastest pressed");
  };

  const handleOptimalPress = () => {
    dispatch(setOptimal());
    console.log("Optimal pressed");
  };

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
          <div className="transfers">
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
              <li className="option" onClick={handleToggleZero}>
                <input
                  type="checkbox"
                  id="0"
                  className="checkbox"
                  checked={checkboxZero}
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
          </div>
          <div className="tickets-container">
            <div className="costs">
              <ul className="filters">
                <li>
                  <button
                    onClick={handleCheapestPress}
                    className={`${btnClass}`}
                  >
                    САМЫЙ ДЕШЕВЫЙ
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleFastestPress}
                    className={`${btnClass}`}
                  >
                    САМЫЙ БЫСТРЫЙ
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleOptimalPress}
                    className={`${btnClass}`}
                  >
                    ОПТИМАЛЬНЫЙ
                  </button>
                </li>
              </ul>
            </div>
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
