import React, { useState, useRef, useEffect } from "react";
import "./DFS.css";
import "./visualizer.css";
import Code from "../../../components/Code.jsx";

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.highlighted = false;
  }
}

export default function DFS() {
  const [tree, setTree] = useState(new TreeNode(1,new TreeNode(2, undefined, undefined),new TreeNode(3, undefined, undefined)))

  return (
    <div className="visualizer">
      <div className="graphic">
        <div className="graph">
              <div style={{
                background: tree.left.highlighted
              }}>{tree.left.val}</div>
        </div>
        <div className="result"></div>
      </div>
      <div className="code">
        <Code lang="javascript" data='console.log("hello world");' />
      </div>
    </div>
  );
}
