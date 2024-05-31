import React, { useState, useRef, useEffect } from "react";
import "./DFS.css";
import "./visualizer.css";
import Code from "../../../components/Code.jsx";

class TreeNode {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

function insertLevelOrder(arr, root, i) {
  if (i < arr.length) {
    let temp = new TreeNode(arr[i]);
    root = temp;

    root.left = insertLevelOrder(arr, root.left, 2 * i + 1);
    root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
  }
  return root;
}

function drawTree(ctx, root, x, y, angle, depth, spread) {
  if (root === null) {
    return;
  }

  const length = 100 / (depth + 1);
  const xEnd = x + length * Math.cos(angle);
  const yEnd = y + length * Math.sin(angle);

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();

  ctx.fillText(root.val, xEnd, yEnd);

  drawTree(ctx, root.left, xEnd, yEnd, angle - spread, depth + 1, spread);
  drawTree(ctx, root.right, xEnd, yEnd, angle + spread, depth + 1, spread);
}

export default function DFS() {
  const [step, setStep] = useState(0);
  const list = [1, 2, 3]; // This will be converted to a binary tree
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    const root = insertLevelOrder(list, null, 0);
    drawTree(ctx, root, canvas.width / 2, 50, Math.PI / 2, 0, Math.PI / 4);
  }, [list]);

  return (
    <div className="visualizer">
      <div className="graphic">
        <div className="graph">
          <canvas ref={canvasRef} id="graph-canvas" width="800" height="600"></canvas>
        </div>
        <div className="result"></div>
      </div>
      <div className="code">
        <Code lang="javascript" data='console.log("hello world");' />
      </div>
    </div>
  );
}
