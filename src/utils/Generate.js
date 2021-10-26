import { Graph } from "./Graph.js";

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateGraph() {
  const graph = new Graph();

  const size = randomNum(150, 50);

  for (let i = 1; i <= size; i++) {
    graph.addNode(i);
  }

  for (let i = 1; i <= size; i++) {
    const neighborNumber = randomNum(size, 1);
    graph.addEdge(i, neighborNumber);
  }

  return graph;
}
