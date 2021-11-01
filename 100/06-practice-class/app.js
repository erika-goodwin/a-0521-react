let catArray = data.map((result, index) => {
  return <Category key={index} data={result} />;
});

ReactDOM.render(
  <div className="row">
    <ul className="cat-nav center-align">{catArray}</ul>
  </div>,
  document.getElementById("root")
);
