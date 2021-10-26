import "./App.css";

import { useState, useEffect } from "react";
import { ForceGraph3D } from "react-force-graph";
import { Button, Modal, Box } from "@material-ui/core";
import { generateGraph } from "./utils/Generate";
import { balanceGraph } from "./utils/BalanceGraph";
import formatGraph from "./utils/FormatGraph";

const App = () => {
  const [modal, setModal] = useState(true);
  const [graph, setGraph] = useState();
  const [formatedGraph, setFormatedGraph] = useState();

  useEffect(() => {
    const g = generateGraph();
    setGraph(g);
    const fg = formatGraph(g);
    setFormatedGraph(fg);
  }, []);

  return (
    <div className="App">
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box className="box">
          <h2>Graph Balancer</h2>
          <p>
            O objetivo deste trabalho é ser uma aplicação hipotética para o uso
            de algoritmos para marcação de nós de um grafo com diferentes flags,
            para este caso, cores. Entretanto, para aumentar a complexidade do
            algoritmo utilizado, é imposta a restrição de que nós vizinhos não
            podem ser marcados com a mesma cor. A priori isto parece ser uma
            tarefa simples de ser resolvida, mas o desafio se torna interessante
            quando temos um grafo grande e denso sendo colocado a prova nesta
            aplicação.
          </p>
        </Box>
      </Modal>
      <div className="SideBar">
        <div className="SideBarContent">
          <h2>Graph Balancer</h2>
          <Button
            variant="outlined"
            className="button"
            onClick={() => {
              const g = generateGraph();
              setGraph(g);
              const fg = formatGraph(g);
              setFormatedGraph(fg);
            }}
          >
            Gerar grafo
          </Button>
          <Button
            variant="outlined"
            className="button"
            onClick={() => {
              const g = balanceGraph(graph);
              setGraph(g);
              const fg = formatGraph(g);
              setFormatedGraph(fg);
            }}
          >
            Balancear grafo
          </Button>
        </div>
      </div>
      {graph && (
        <div className="Graph">
          <ForceGraph3D
            backgroundColor="#ffffff"
            nodeOpacity={1}
            width={window.innerWidth - 300}
            linkColor="#000000"
            linkOpacity={1}
            linkWidth={1.5}
            graphData={formatedGraph}
          />
        </div>
      )}
    </div>
  );
};

export default App;
