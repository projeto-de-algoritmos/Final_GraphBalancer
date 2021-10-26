class Graph {
    constructor() {
        this.nodes = [];
        this.links = [];
        this.edges = {};
        this.colors = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.edges[node.id] = [];
        this.colors[node.id] = -1;
    }

    addLink(link) {
        this.links.push(link);
        this.edges[link.source].push(link.target);
        this.edges[link.target].push(source);
    }
}

class Node {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.val = 1;
        this.color = -1;
    }
}

class Link {
    constructor(source, target) {
        this.source = source;
        this.target = target;
    }
}
