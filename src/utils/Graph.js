class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }

    addEdge(edge) {
        this.edges.push(edge);
    }
}

class Node {
    constructor(id, name, val) {
        this.id = id;
        this.name = name;
        this.val = val;
        this.color = -1;
    }
}

class Edge {
    constructor(source, target) {
        this.source = source;
        this.target = target;
    }
}