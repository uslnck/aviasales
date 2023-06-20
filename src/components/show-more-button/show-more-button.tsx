import "./show-more-button.scss";

function ShowMoreButton() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <button className="more-tickets" onClick={handleClick}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
}

export default ShowMoreButton;
