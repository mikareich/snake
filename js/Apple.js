import RenderObject from "./RenderObject.js";

class Apple {
  constructor(position) {
    this.position = position;

    this.renderObjects = [
      new RenderObject(1, 1, position, { backgroundColor: "yellow" }),
    ];
  }

  update() {}

  getRenderObjects() {
    return this.renderObjects;
  }
}

export default Apple;
