import { Color } from "../types/Color.ts";
import Effect from "./Effect.ts";

const EASE = 0.1;
const FRICTION = 0.95;

export default class Particle {
  index: number;
  effect: Effect;
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  vx: number;
  vy: number;
  ease: number;
  friction: number;
  dx: number;
  dy: number;
  distance: number;
  force: number;
  angle: number;
  color: Color;
  visibilityLife: number;

  constructor(
    index: number,
    effect: Effect,
    originX: number,
    originY: number,
    color: Color,
    visibilityLife: number,
  ) {
    this.index = index;
    this.effect = effect;
    this.originX = Math.floor(originX);
    this.originY = Math.floor(originY);
    this.x = this.originX;
    this.y = this.originY;
    this.size = this.effect.gap;
    this.vx = 0;
    this.vy = 0;
    this.ease = EASE;
    this.friction = FRICTION;
    this.dx = 0;
    this.dy = 0;
    this.distance = 0;
    this.force = 0;
    this.angle = 0;
    this.color = {
      red: color.red,
      green: color.green,
      blue: color.blue,
      alpha: color.alpha,
    };
    this.visibilityLife = visibilityLife;
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = `rgb(${this.color.red}, ${this.color.green}, ${this.color.blue}, ${this.color.alpha})`;
    context.fillRect(this.x, this.y, this.size, this.size);
  }

  update(color: Color, visibilityLife: number) {
    this.color = color;
    this.visibilityLife = visibilityLife;

    this.dx = (this.effect.mouse.x ?? 0) - this.x;
    this.dy = (this.effect.mouse.y ?? 0) - this.y;
    this.distance = this.dx * this.dx + this.dy * this.dy;
    this.force = -this.effect.mouse.radius / this.distance;

    if (this.distance < this.effect.mouse.radius) {
      this.angle = Math.atan2(this.dy, this.dx);
      this.vx += this.force * Math.cos(this.angle);
      this.vy += this.force * Math.sin(this.angle);
    }

    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;

    if (this.visibilityLife > 0) {
      this.color.alpha += this.effect.visibilityEase;

      if (this.color.alpha >= 1) this.color.alpha = 1;
    } else {
      this.color.alpha -= this.effect.visibilityEase;

      if (this.color.alpha <= 0) this.color.alpha = 0;
    }

    this.visibilityLife = this.visibilityLife - 1;
  }
}
