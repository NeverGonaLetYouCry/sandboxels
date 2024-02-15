// Assuming behaviors is an object that contains the WALL behavior
const behaviors = {
  WALL: "wall"
};

// Define the element
const elements = {
  lightercube: {
    color: ["#ffffff"],
    behavior: behaviors.WALL, // Assuming WALL behavior is defined in the behaviors object
    category: "solids",
    state: "solid",
    density: 265,
    burn: 1000,
    burnTime: 300,
    burnInto: ["smoke"]
  }
};
