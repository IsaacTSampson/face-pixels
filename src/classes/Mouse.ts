export default class Mouse {
  radius: number;
  x: number | undefined;
  y: number | undefined;

  constructor(radius: number, x: number | undefined, y: number | undefined) {
    this.radius = radius;
    this.x = x;
    this.y = y;
  }
}
