import { COLORS } from "./COLORS.js";
import { FormatedGraph, Link, Node } from "./Graph.js";

export default function formatGraph(graph) {
    const links = [];
    const nodes = [];
    Object.keys(graph.edges).forEach((sourceId) => {
        const node = new Node(sourceId);
        node.color = COLORS[graph.colors[sourceId]];
        nodes.push(node);

        graph.edges[sourceId].forEach((targetId) => {
            links.push(new Link(sourceId, targetId));
        });
    });

    const formatedGraph = new FormatedGraph();
    formatedGraph.nodes = nodes;
    formatedGraph.links = links;
    
    return formatedGraph;
}