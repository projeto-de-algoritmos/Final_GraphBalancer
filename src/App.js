import "./App.css";
import { ForceGraph3D } from "react-force-graph";
import { Button } from "@material-ui/core";

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
  return (
    <div className="App">
      <div className="SideBar">
        <div className="SideBarContent">
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
