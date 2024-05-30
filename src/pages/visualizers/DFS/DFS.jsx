import "./visualizer.css"
import Code from "../../../components/Code.jsx";

export default function DFS() {
  return (
    <div className="visualizer">
      <div className="graphic">
        <div className="graph"></div>
        <div className="result"></div>
      </div>
      <div className="code">
        <Code lang="javascript" data='console.log("hello world");'/>
      </div>
    </div>
  );
}
