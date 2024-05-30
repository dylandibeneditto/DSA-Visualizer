function hashString(string) {
  let result = 0;
  const split = string.split("");
  split.forEach((item, index) => {
    result += string.charCodeAt(index);
  });
  return `hsl(${result*2}deg, 80%, 60%)`;
}

export default function HomeItem(props) {
  console.log(hashString(props.category));
  return (
    <div className="home-item">
      <div className="home-item-title">{props.title}</div>
      <div className="spacer"></div>
      <div className="home-item-category-chip">
        <div className="home-item-category-text">{props.category}</div>
        <div
          className="home-item-category-dot"
          style={{
            background: hashString(props.category),
          }}
        ></div>
      </div>
    </div>
  );
}
