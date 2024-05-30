import { Link } from "react-router-dom";
import HomeItem from "./HomeItem";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-padding">
      <div className="home">
        <div className="home-container">
          <Link path="/depth-first-search">
            <HomeItem title="Depth First Search" category="trees"></HomeItem>
          </Link>
          <Link path="/depth-first-search">
            <HomeItem title="Depth First Search" category="graphs"></HomeItem>
          </Link>
          <Link path="/depth-first-search">
            <HomeItem
              title="Depth First Search"
              category="dynamic programming"
            ></HomeItem>
          </Link>
          <Link path="/depth-first-search">
            <HomeItem title="Depth First Search" category="arrays"></HomeItem>
          </Link>
        </div>
      </div>
    </div>
  );
}
