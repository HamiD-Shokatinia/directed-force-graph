function getRandomColor() {
  const colors = [
    "#FFC107",
    "#3F51B5",
    "#009688",
    "#8BC34A",
    "#FF5722",
    "#607D8B",
    "#673AB7",
    "#795548",
    "#FFEB3B",
    "#9C27B0",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default getRandomColor;
