import React, { useEffect, useState } from "react";
import { Graph } from "react-d3-graph";
import getRandomCityName from "./component/randomCityName";
import getRandomColor from "./component/randomColor";
import getRandomNodeId from "./component/randomNodeId";

function DirectedGraph() {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    generateNodes();
  }, []);

  const generateNodes = () => {
    const nodeCount = 20;
    const nodes = [];
    const links = [];

    for (let i = 0; i < nodeCount; i++) {
      const cityName = getRandomCityName();
      const count = getRandomCount();
      const color = getRandomColor();
      const id = i.toString();
      nodes.push({
        id,
        label: `${cityName}\n Count: ${count}`,
        count,
        color,
        borderWidth: 660,
        borderColor: "#ffff",
      });

      const linkCount = Math.floor(Math.random() * 5) + 1;
      for (let j = 0; j < linkCount; j++) {
        const targetNodeId = getRandomNodeId(nodes, id);
        if (targetNodeId !== null) {
          links.push({
            source: id,
            target: targetNodeId,
            type: Math.random() < 0.5 ? "arrow" : "curvedArrow",
            arrowHeadType: "arrow",
            color: "#3F51B5",
          });
        }
      }
    }

    setGraphData({ nodes, links });
  };

  const getRandomCount = () => {
    return Math.floor(Math.random() * 6);
  };

  return (
    <Graph
      id="graph-id"
      data={graphData}
      config={{
        nodeHighlightBehavior: true,
        directed: true,
        automaticRearrangeAfterDropNode: true,
        collapsible: true,
        height: 700,
        width: 1200,
        d3: {
          alphaTarget: 200,
          disableLinkForce: false,
          gravity: -400,
        },
        node: {
          color: "#fff",
          size: 800,
          highlightStrokeColor: "#000",
          labelPosition: "bottom",
          labelProperty: "label",
          strokeColor: "#000",
          highlightStrokeWidth: 5,
          strokeWidth: 2,
          fontColor: "#000",
          fontSize: 14,
          highlightFontSize: 12,
          highlightFontWeight: "bold",
          symbolType: "circle",
          renderLabel: true,
        },
        link: {
          highlightColor: "#000",
          color: "black",
        },
      }}
    />
  );
}
export default DirectedGraph;
