import { useDispatch, useSelector } from "react-redux";
import {
  toggleAllTransfers,
  toggleZeroTransfers,
  toggleOneTransfer,
  toggleTwoTransfers,
  toggleThreeTransfers,
} from "../../store/checkboxesSlice";
import "./tranfers.scss";
import { RootState } from "../../store";

function Transfers() {
  const {
    allTransfersChecked: checkboxAll,
    zeroTransfersChecked: checkboxZero,
    oneTransferChecked: checkboxOne,
    twoTransfersChecked: checkboxTwo,
    threeTransfersChecked: checkboxThree,
  } = useSelector((state: RootState) => state.checkboxes);

  const dispatch = useDispatch();

  const options = [
    { id: 1, label: "Все", checked: checkboxAll },
    { id: 2, label: "Без пересадок", checked: checkboxZero },
    { id: 3, label: "1 пересадка", checked: checkboxOne },
    { id: 4, label: "2 пересадки", checked: checkboxTwo },
    { id: 5, label: "3 пересадки", checked: checkboxThree },
  ];

  const handleClick = (optionId: number) => {
    let isCheckAll = false;
    switch (optionId) {
      case 1:
        dispatch(toggleAllTransfers());
        break;
      case 2:
        isCheckAll =
          !checkboxZero && checkboxOne && checkboxTwo && checkboxThree;
        dispatch(toggleZeroTransfers({ all: isCheckAll }));
        break;
      case 3:
        isCheckAll =
          checkboxZero && !checkboxOne && checkboxTwo && checkboxThree;
        dispatch(toggleOneTransfer({ all: isCheckAll }));
        break;
      case 4:
        isCheckAll =
          checkboxZero && checkboxOne && !checkboxTwo && checkboxThree;
        dispatch(toggleTwoTransfers({ all: isCheckAll }));
        break;
      case 5:
        isCheckAll =
          checkboxZero && checkboxOne && checkboxTwo && !checkboxThree;
        dispatch(toggleThreeTransfers({ all: isCheckAll }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="transfers">
      <h2 className="header">КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <ul className="options">
        {options.map((option) => (
          <li
            className="option"
            onClick={() => handleClick(option.id)}
            key={option.id}
          >
            <input
              key={option.id}
              type="checkbox"
              id={option.id.toString()}
              className="checkbox"
              checked={option.checked}
              readOnly
            />
            <label
              htmlFor={option.id.toString()}
              onClick={(e) => e.stopPropagation()}
            >
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transfers;
