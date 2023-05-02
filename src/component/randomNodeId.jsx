function getRandomNodeId(nodes, excludedNodeId) {
  const filteredNodes = nodes.filter((node) => node.id !== excludedNodeId);
  if (filteredNodes.length === 0) {
    return null;
  }
  const randomNode =
    filteredNodes[Math.floor(Math.random() * filteredNodes.length)];
  return randomNode.id;
}

export default getRandomNodeId;
