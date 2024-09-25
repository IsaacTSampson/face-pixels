import Effect from "./Effect";
import { constructScaleDimensions } from "../utils.ts";

export default class Animation {
  readCanvas: HTMLCanvasElement;
  readContext: CanvasRenderingContext2D;
  writeCanvas: HTMLCanvasElement;
  writeContext: CanvasRenderingContext2D;
  effect: Effect;
  animationId: number;
  lastExecutionTime: number;
  throttleInterval: number;
  frameRate: number;

  constructor(
    pixelSize: number,
    mouseRadius: number,
    visibilityEase: number,
    recognitionLeniency: number,
    videoElm: HTMLVideoElement | null,
    writeCanvas: HTMLCanvasElement,
    readCanvas: HTMLCanvasElement,
    wrapper: HTMLDivElement,
    frameRate: number,
  ) {
    this.readCanvas = readCanvas;
    this.readContext = this.readCanvas.getContext("2d", {
      willReadFrequently: true,
    }) as CanvasRenderingContext2D;

    this.writeCanvas = writeCanvas;
    this.writeContext = this.writeCanvas.getContext("2d", {
      willReadFrequently: true,
    }) as CanvasRenderingContext2D;

    const {
      w: scaledCanvasWidth,
      h: scaledCanvasHeight,
      ratio: canvasScaleRatio,
    } = constructScaleDimensions({
      targetWidth: screen.width,
      targetHeight: screen.height,
      sourceWidth: wrapper.clientWidth,
      sourceHeight: wrapper.clientHeight,
      useMin: true,
    });

    this.readCanvas.width = scaledCanvasWidth;
    this.readCanvas.height = scaledCanvasHeight;

    this.writeCanvas.width = this.readCanvas.width;
    this.writeCanvas.height = this.readCanvas.height;

    this.writeCanvas.addEventListener("mouseleave", this.onMouseLeave);

    this.effect = new Effect(
      this.writeCanvas.width,
      this.writeCanvas.height,
      canvasScaleRatio,
      pixelSize,
      mouseRadius,
      visibilityEase,
      recognitionLeniency,
      videoElm,
      wrapper,
    );

    this.effect.updateParticleColors(this.readContext, { init: true });
    this.animationId = 0;
    this.frameRate = frameRate;
    this.lastExecutionTime = 0;
    this.throttleInterval = 1000 / this.frameRate;
  }

  delete = () => {
    this.effect.delete();
    cancelAnimationFrame(this.animationId);
    this.writeCanvas.removeEventListener("mouseleave", this.onMouseLeave);
    this.writeContext.clearRect(
      0,
      0,
      this.writeCanvas.width,
      this.writeCanvas.height,
    );
    this.lastExecutionTime = 0;
  };

  onMouseLeave = () => {
    this.effect.mouse.x = -Infinity;
    this.effect.mouse.y = -Infinity;
  };

  animate = (timestamp: DOMHighResTimeStamp) => {
    if (timestamp - this.lastExecutionTime >= this.throttleInterval) {
      this.writeContext.clearRect(
        0,
        0,
        this.writeCanvas.width,
        this.writeCanvas.height,
      );
      this.effect.draw(this.writeContext);
      this.effect.updateParticleColors(this.readContext);

      this.lastExecutionTime = timestamp;
    }

    this.animationId = requestAnimationFrame(this.animate);
  };
}
