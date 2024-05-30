import { Link } from "react-router-dom";
import HomeItem from "./HomeItem";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-padding">
      <div className="home">
        <div className="home-container">
          <Link to="/depth-first-search">
            <HomeItem title="Depth First Search" category="trees"></HomeItem>
          </Link>
        </div>
      </div>
    </div>
  );
}
