import "./App.css";

import { useState } from "react";
import { ForceGraph3D } from "react-force-graph";
import { Button, Modal, Box } from "@material-ui/core";

const myData = {
  nodes: [
    {
      id: "id1",
      val: 1,
      color: "#657445",
    },
    {
      id: "id2",
      val: 1,
      color: "#af7445",
    },
    {
      id: "id3",
      val: 1,
      color: "#af7445",
    },
  ],
  links: [
    {
      source: "id1",
      target: "id2",
    },
    {
      source: "id1",
      target: "id3",
    },
  ],
};

const App = () => {
  const [modal, setModal] = useState(true);

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
          <Button variant="outlined" className="button">
            Gerar grafo
          </Button>
          <Button variant="outlined" className="button">
            Colorir grafo
          </Button>
        </div>
      </div>
      <div className="Graph">
        <ForceGraph3D
          backgroundColor="#ffffff"
          nodeOpacity={1}
          width={window.innerWidth - 300}
          linkColor="#000000"
          linkOpacity={1}
          linkWidth={1.5}
          graphData={myData}
        />
      </div>
    </div>
  );
};

export default App;
