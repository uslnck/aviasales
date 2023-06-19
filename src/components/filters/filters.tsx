import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/filtersSlice";
import classNames from "classnames";
import "./filters.scss";
import { RootState } from "../../store";

function Filters() {
  const dispatch = useDispatch();
  const { selectedFilter } = useSelector((state: RootState) => state.filters);

  const buttons = [
    { id: 1, label: "САМЫЙ ДЕШЕВЫЙ", filter: "cheapest" },
    { id: 2, label: "САМЫЙ БЫСТРЫЙ", filter: "fastest" },
    { id: 3, label: "ОПТИМАЛЬНЫЙ", filter: "optimal" },
  ];

  const handleClick = (buttonId: number) => {
    switch (buttonId) {
      case 1:
        dispatch(setFilter({ filter: "cheapest" }));
        break;
      case 2:
        dispatch(setFilter({ filter: "fastest" }));
        break;
      case 3:
        dispatch(setFilter({ filter: "optimal" }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="costs">
      <ul className="filters">
        {buttons.map((button) => (
          <li key={button.id}>
            <button
              key={button.id}
              className={classNames("filter", {
                active: selectedFilter === button.filter,
              })}
              onClick={() => handleClick(button.id)}
            >
              {button.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filters;
