import { COLORS } from "./COLORS.js";
import { Link, Node } from "./Graph.js";

export default function formatGraph(graph) {
  const links = [];
  const nodes = [];
  Object.keys(graph.edges).forEach((sourceId) => {
    const node = new Node(sourceId);
    if (graph.colors[sourceId] >= 0) {
      node.color = COLORS[graph.colors[sourceId]];
    } else {
      node.color = "#121212";
    }
    nodes.push(node.toDict());

    graph.edges[sourceId].forEach((targetId) => {
      links.push(new Link(sourceId, targetId).toDict());
    });
  });

  const formatedGraph = {};
  formatedGraph["nodes"] = nodes;
  formatedGraph["links"] = links;

  return formatedGraph;
}
