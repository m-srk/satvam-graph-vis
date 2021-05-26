import { Graph } from "react-d3-graph";

// graph payload (with minimalist structure)
const data = {
  nodes: [{ id: "BR" }, { id: "Node1" }, { id: "Node2" }, { id: "Node3" }, { id: "Node4" }, { id: "Node5" }],
  links: [
    { source: "Node1", target: "BR" },
    { source: "Node2", target: "BR" },
    { source: "Node3", target: "Node2" },
    { source: "Node4", target: "Node3" },
    { source: "Node5", target: "Node2" },
  ],
};

// the graph configuration, just override the ones you need
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: "lightgreen",
    size: 240,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
};

const onClickNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

function App() {
  return (
    <div className="App">
      <Graph
        id="graph-id" // id is mandatory
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />;
    </div>
  );
}

export default App;
