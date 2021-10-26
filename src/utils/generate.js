import { Graph, Node, Link } from "./Graph.js";

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function generateGraph() {
    const graph = new Graph();

    const size = randomIntFromInterval(50, 12);

    for (let i=1; i<=size; i++) {
        var nome = "nome" + i.toString();
        var id = "id" + i.toString();
        graph.addNode(new Node(id, nome));
    }

    for (let i=1; i<=size; i++) {
        const id = "id" + i.toString();
        
        const neighborNumber = randomIntFromInterval(size, 1);
        const neighborId = "id" + neighborNumber.toString();
        
        graph.addLink(new Link(id, neighborId));
    }
}
